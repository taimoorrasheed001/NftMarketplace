// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Auction is Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _listedNfts;
    Counters.Counter private _nftCount;

    constructor() {}

    //Structs

    struct auction_details {
        address payable auctioneer;
        address payable highestBidder;
        uint256 startTime;
        uint256 endTime;
        uint256 highestPayableBid;
        uint256 bidInc;
        uint256 nftId;
        IERC721 nft;
        bool listed; // adres nft
        Auc_State state;
    }

    struct nft_details {
        IERC721 nft;
        uint256 nftId;
        uint256 price;
    }

    enum Auc_State {
        Started,
        Running,
        Ended,
        Cancelled
    }

    //Events

    event AuctionCreated(
        address creator,
        address nftAddrs,
        uint256 nftId,
        uint256 auctionId,
        uint256 startTime,
        uint256 endTime,
        bool listed
    );

    event AuctionCancelled(
        address cancelledBy,
        uint256 auctionId,
        uint256 time
    );

    event AuctionEnded(address endedBy, uint256 auctionId, uint256 time);

    event Bided(
        address bider,
        uint256 bidAmount,
        uint256 auctionId,
        uint256 time
    );

    event AuctionFinalized(
        address auctioneer,
        address highestBider,
        uint256 auctionId,
        uint256 bidAmount,
        uint256 time
    );

    event AuctionRefunded(
        address receiver,
        uint256 refundAmount,
        uint256 auctionId
    );

    //Mappings

    mapping(address => mapping(uint256 => uint256)) public bids;
    // mapping(address => nft_details)public nftSell;
    mapping(uint256 => auction_details) public auctionDetails;
    mapping(address => uint256[]) public getAuctions;
    mapping(uint256 => bool) public isIdExist;
    mapping(address => bool) public isOwner;

    //Modifiers

    modifier notOwner(uint256 _auctionId) {
        require(
            msg.sender != auctionDetails[_auctionId].auctioneer,
            "Owner can't bid"
        );
        _;
    }

    modifier Owner(uint256 _auctionId) {
        require(
            msg.sender == auctionDetails[_auctionId].auctioneer,
            "Owner can't bid"
        );
        _;
    }

    modifier beforeEnding(uint256 _auctionId) {
        require(
            !(block.timestamp > auctionDetails[_auctionId].endTime),
            "Auction ended"
        );
        _;
    }

    modifier beforeStarting(uint256 _auctionId) {
        require(
            block.timestamp > auctionDetails[_auctionId].startTime,
            "Not Started Yet"
        );
        _;
    }

    modifier isCanceled(uint256 _auctionId) {
        require(
            auctionDetails[_auctionId].state == Auc_State.Cancelled,
            "Auction Canceled"
        );
        _;
    }

    modifier findId(uint256 _auctionId) {
        require(isIdExist[_auctionId] == true, "Id not found");
        _;
    }

    //    require(
    //        !(block.timestamp > auctionDetails[_auctionId].startTime),
    //         "Not Started Yet"
    //     );

    //Functions

    function setNftAddrsOne(uint256 _auctionId, address _nftAddrs) private {
        auctionDetails[_auctionId].nft = IERC721(_nftAddrs);
    }

    /**
     * @dev createAuction is used to create the auction.
     * userMinting will not work if public sales are active.
     * Once user limit reached then user will not allowd to mint
     * Requirement:
     * @param _startTime- starting time
     * @param _endTime- ending time
     * @param _nftAddrs- nfts contract address
     * @param _nftId- nft id
     * Emits a {AuctionEnded} event.
     */

    //auction id _ auto increment
    // nft auction jb hogi tw wo user k wallet s hamare auction waly contract pr ajayegi isse user usko wapsi auction pr nh list kr skta
    //auction create hua first step on front end
    // first nft approve hogi
    // smart contract ka auction function hit hoga
    // user jb bh bid krega tw wo price hume smart contract pr lekr ani h
    // auction function mai transferFrom run hoga phr nft user k wallet s auction waly contract pr ajayegi
    // aik function pr jo all auctions list huye hoge
    //aik function or hoga jahan user k wallet adress s ye get krenge k us specific user nai kitni auction start kre hain or unki details
    // auction k start time s phele auction start nh hoga
    //end time pr auction pr jiski highest id hai usko nft transfer ho jayegi
    //auction end pr sary participants ko unke eth return ho jayege
    //auction ka state jo h wo end pr chala jayega....

    function createAuction(
        uint256 _startTime,
        uint256 _endTime,
        address _nftAddrs,
        uint256 _nftId
    ) public {
        // require(isOwner[msg.sender] != true, "Already taken");
        // require(
        //     auctionDetails[_auctionId].state != Auc_State.Running,
        //     "Already Inprogress"
        // );
        _listedNfts.increment();
        uint256 newItemId = _listedNfts.current();
        setNftAddrsOne(newItemId, _nftAddrs);
        if (auctionDetails[newItemId].nft.ownerOf(_nftId) == msg.sender) {
            auctionDetails[newItemId].auctioneer = payable(msg.sender);
            auctionDetails[newItemId].startTime = _startTime;
            auctionDetails[newItemId].endTime = _endTime;
            auctionDetails[newItemId].state = Auc_State.Running;
            auctionDetails[newItemId].bidInc = 1 ether;
            auctionDetails[newItemId].nftId = _nftId;
            auctionDetails[newItemId].nft = IERC721(_nftAddrs);
            auctionDetails[newItemId].listed = true;
            isOwner[msg.sender] = true;

            auctionDetails[newItemId].nft.transferFrom(
                msg.sender,
                address(this),
                _nftId
            );

            getAuctions[msg.sender].push(newItemId);
            isIdExist[newItemId] = true;

            emit AuctionCreated(
                msg.sender,
                _nftAddrs,
                _nftId,
                newItemId,
                _startTime,
                _endTime,
                true
            );
        } else {
            _listedNfts.decrement();
            revert("not a owner of nft");
        }
    }

    function userAucitons() public view returns (uint256[] memory) {
        return getAuctions[msg.sender];
    }

    /**
     * @dev cancelAuc is used to cancel the auction.
     * Requirement:
     * @param _auctionId- Auction Id
     * Emits a {AuctionEnded} event.
     */

    function cancelAuc(uint256 _auctionId) public findId(_auctionId) {
        require(isOwner[msg.sender] == true, "only Owner");
        auctionDetails[_auctionId].state = Auc_State.Cancelled;
        auctionDetails[_auctionId].nft.transferFrom(
            address(this),
            msg.sender,
            auctionDetails[_auctionId].nftId
        );
        auctionDetails[_auctionId].listed = false;
        emit AuctionCancelled(msg.sender, _auctionId, block.timestamp);
    }

    //End Auction
    function endAuc(uint256 _auctionId) public findId(_auctionId) {
        require(isOwner[msg.sender] == true, "only Owner");
        auctionDetails[_auctionId].state = Auc_State.Ended;

        emit AuctionEnded(msg.sender, _auctionId, block.timestamp);
    }

    function min(uint256 a, uint256 b) private pure returns (uint256) {
        if (a <= b) return a;
        else return b;
    }

    function currentTime() public view returns (uint256) {
        return block.timestamp;
    }

    //Bid
    function bid(uint256 _auctionId)
        public
        payable
        findId(_auctionId)
        notOwner(_auctionId)
        beforeEnding(_auctionId)
        beforeStarting(_auctionId)
    {
        require(
            auctionDetails[_auctionId].state == Auc_State.Running,
            "not running"
        );
        require(msg.value >= 0.000000000000000001 ether);

        uint256 currentBid = bids[msg.sender][_auctionId] + msg.value;

        require(
            currentBid > auctionDetails[_auctionId].highestPayableBid,
            "bid must be > current"
        );

        bids[msg.sender][_auctionId] = currentBid;

        if (
            currentBid <
            bids[auctionDetails[_auctionId].highestBidder][_auctionId]
        ) {
            auctionDetails[_auctionId].highestPayableBid = min(
                currentBid + auctionDetails[_auctionId].bidInc,
                bids[auctionDetails[_auctionId].highestBidder][_auctionId]
            );
        } else {
            auctionDetails[_auctionId].highestPayableBid = min(
                currentBid,
                bids[auctionDetails[_auctionId].highestBidder][_auctionId] +
                    auctionDetails[_auctionId].bidInc
            );

            auctionDetails[_auctionId].highestBidder = payable(msg.sender);
            emit Bided(msg.sender, currentBid, _auctionId, block.timestamp);
        }
    }

    //Finalized Auction
    function finalizeAuc(uint256 _auctionId) public findId(_auctionId) {
        // require(isIdExist[_auctionId] == true, "Id not found");
        require(
            auctionDetails[_auctionId].state == Auc_State.Cancelled ||
                block.timestamp > auctionDetails[_auctionId].endTime,
            "Auction In Progress"
        );

        require(
            msg.sender == auctionDetails[_auctionId].auctioneer ||
                bids[msg.sender][_auctionId] > 0
        );

        address payable person;
        uint256 value;

        if (auctionDetails[_auctionId].state == Auc_State.Cancelled) {
            if (msg.sender == auctionDetails[_auctionId].highestBidder) {
                person = auctionDetails[_auctionId].highestBidder;
                value = bids[auctionDetails[_auctionId].highestBidder][
                    _auctionId
                ];

                 bids[auctionDetails[_auctionId].highestBidder][_auctionId] -
                    auctionDetails[_auctionId].highestPayableBid;

                    emit AuctionRefunded(
                    msg.sender,
                    bids[msg.sender][_auctionId],
                    _auctionId
                );
            } else {
                person = payable(msg.sender);
                value = bids[msg.sender][_auctionId];
                auctionDetails[_auctionId].state = Auc_State.Cancelled;
            }
        } else {
            if (msg.sender == auctionDetails[_auctionId].auctioneer) {
                person = auctionDetails[_auctionId].auctioneer;
                value = auctionDetails[_auctionId].highestPayableBid;

                auctionDetails[_auctionId].nft.transferFrom(
                    address(this),
                    auctionDetails[_auctionId].highestBidder,
                    auctionDetails[_auctionId].nftId
                );

                auctionDetails[_auctionId].highestPayableBid = 0;
                auctionDetails[_auctionId].state = Auc_State.Ended;
                auctionDetails[_auctionId].listed = false;

                emit AuctionFinalized(
                    auctionDetails[_auctionId].auctioneer,
                    msg.sender,
                    _auctionId,
                    auctionDetails[_auctionId].highestPayableBid,
                    block.timestamp
                );
            } else {
                require(msg.sender != auctionDetails[_auctionId].highestBidder);
                person = payable(msg.sender);
                value = bids[msg.sender][_auctionId];
                auctionDetails[_auctionId].state = Auc_State.Ended;
                auctionDetails[_auctionId].listed = false;
                emit AuctionRefunded(
                    msg.sender,
                    bids[msg.sender][_auctionId],
                    _auctionId
                );
            }
        }
        bids[msg.sender][_auctionId] = 0;
        person.transfer(value);
    }

    //Get Listed Nfts
    function getListedNfts() public view returns (auction_details[] memory) {
        uint256 nftCount = _listedNfts.current();
        // uint256 unsoldNftsCount = nftCount - _nftsSold.current();

        auction_details[] memory nfts = new auction_details[](nftCount);
        uint256 nftsIndex = 0;
        for (uint256 i = 0; i < nftCount; i++) {
            if (auctionDetails[i + 1].listed) {
                nfts[nftsIndex] = auctionDetails[i + 1];
                nftsIndex++;
            }
        }
        return nfts;
    }
}

