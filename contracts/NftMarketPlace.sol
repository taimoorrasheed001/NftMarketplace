// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Marketplace is ERC721, ERC721URIStorage, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _nftsSold;
    Counters.Counter private _tokenIds;
    Counters.Counter private _nftCount;
    Counters.Counter private _categoryId;
    uint256 public LISTING_FEE = 0.0001 ether;
    address payable private _marketOwner;

    mapping(uint256 => NFT) public _idToNFT;
    // mapping(address => NFT) public getNftDetails;
    mapping(address => bool) public isBlacklisted;
    // mapping( => uint256) public nftCategory;
    mapping(uint256 => string) public nftCategory;
    mapping(uint256 => uint []) private findTokenCategory;

    struct NFT {
        uint256 tokenId;
        address creator;
        address payable seller;
        address owner;
        uint256 price;
        string category;
        bool listed;
        bool sold;
    }

    event NFTListed(
        uint256 tokenId,
        address creator,
        address seller,
        address owner,
        uint256 price,
        string category
    );

    event NFTSold(
        uint256 tokenId,
        address seller,
        address owner,
        uint256 price,
        string category
    );

    event NFTMinted(uint256 tokenId, address creator, address owner);

    event Blacklisted(address BlacklistedBy, address Blacklisted);

    event BlacklistedRemoved(address remover, address removed);

    constructor() ERC721("MyToken", "MTK") {
        _marketOwner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == _marketOwner, "Only Owner Allowed");
        _;
    }

    modifier isBlacklistedCheck() {
        require(isBlacklisted[msg.sender] != true, "Blacklisted Not Allowed");
        _;
    }

   
    //Functions

    //set category
    function setCategory(string memory category)public onlyOwner{
        _categoryId.increment();
        uint256 newCateId = _categoryId.current();

        nftCategory[newCateId] = category;
    }


    function nftsInCategory(uint256 _categoryId) public view returns (uint[] memory){
        return findTokenCategory[_categoryId];
  }   

    /**
     * @dev BlacklistAddRemove allow owner to Blacklist artist.
     * contract owner can call .
     * Requirement:
     * @param _artist- artist address
     * Emits a {Blacklisted} event.
     * Emits a {BlacklistedRemoved} event.
     */

    function blacklistAddRemove(address _artist) public onlyOwner {
        if (isBlacklisted[_artist] == false) {
            isBlacklisted[_artist] = true;

            emit Blacklisted(msg.sender, _artist);
        } else {
            isBlacklisted[_artist] = false;
            emit BlacklistedRemoved(msg.sender, _artist);
        }
    }

    /**
     * @dev mintNft allow Blacklistd user to mint.
     * Blacklistd can call .
     * Requirement:
     * @param tokenURI- metadata hash
     * Emits a {NFTMinted} event.
     */

    function mintNft(string memory tokenURI,uint categoryId) public isBlacklistedCheck {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
         _nftCount.increment();
        _idToNFT[newItemId].owner = msg.sender;
        _idToNFT[newItemId].creator = msg.sender;
        _idToNFT[newItemId].tokenId = newItemId;
        _idToNFT[newItemId].category = nftCategory[categoryId];

        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
         findTokenCategory[categoryId].push(newItemId);
        // getNftDetails[msg.sender].tokenId = newItemId;
        // getNftDetails[msg.sender].creator = msg.sender;
        // getNftDetails[msg.sender].owner = msg.sender;

        emit NFTMinted(newItemId, msg.sender, msg.sender);
    }

    /**
     * @dev listMarketItem to list NFt for sale .
     * Requirement:
     * @param _tokenId- tokenId
     * @param _price- sell price
     * Emits a {NFTListed} event.
     */

    function listMarketItem(uint256 _tokenId, uint256 _price,uint categoryId)
        public
        payable
        nonReentrant
    {
        require(_price > 0, "Price must be at least 1 wei");
        require(msg.value == LISTING_FEE, "Not enough ether for listing fee");

        _transfer(msg.sender, address(this), _tokenId);

        _nftCount.increment();

        _idToNFT[_tokenId] = NFT(
            _tokenId,
            msg.sender,
            payable(msg.sender),
            payable(address(this)),
            _price,
            nftCategory[categoryId],
            true,
            false
        );

        
       
        // getNftDetails[msg.sender] = NFT(
        //     _tokenId,
        //     msg.sender,
        //     payable(msg.sender),
        //     payable(address(this)),
        //     _price,
        //     category,
        //     true,
        //     false
        // );

        emit NFTListed(_tokenId, msg.sender, msg.sender, address(this), _price,nftCategory[categoryId]);
    }

    /**
     * @dev createToken will mint and list the nft for sale .
     * Requirement:
     * @param tokenURI- token URI
     * @param price- sell price
     * Emits a {NFTListed} event.
     */

    function createToken(string memory tokenURI, uint256 price,uint categoryId)
        public
        payable
        isBlacklistedCheck
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        require(price > 0, "Price must be at least 1 wei");
        require(msg.value == LISTING_FEE, "Not enough ether for listing fee");

        _transfer(msg.sender, address(this), newTokenId);

        _nftCount.increment();

        _idToNFT[newTokenId] = NFT(
            newTokenId,
            msg.sender,
            payable(msg.sender),
            payable(address(this)),
            price,
            nftCategory[categoryId],
            true,
            false
        );
        findTokenCategory[categoryId].push(newTokenId);

        emit NFTListed(newTokenId, msg.sender, msg.sender, address(this), price,nftCategory[categoryId]);
        
        return newTokenId;

        
        // nftCategory[category] = newTokenId;


        // getNftDetails[msg.sender] = NFT(
        //     newTokenId,
        //     msg.sender,
        //     payable(msg.sender),
        //     payable(address(this)),
        //     price,
        //     category,
        //     true,
        //     false
        // );
    }

    // List the NFT on the marketplace
    // function listNft(uint256 _tokenId, uint256 _price) private nonReentrant {
    //     require(_price > 0, "Price must be at least 1 wei");
    //     require(msg.value == LISTING_FEE, "Not enough ether for listing fee");

    //     _transfer(msg.sender, address(this), _tokenId);

    //     _nftCount.increment();

    //     _idToNFT[_tokenId] = NFT(
    //         _tokenId,
    //         msg.sender,
    //         payable(msg.sender),
    //         payable(address(this)),
    //         _price,
    //         true,
    //         false
    //     );

    //     getNftDetails[msg.sender] = NFT(
    //         _tokenId,
    //         msg.sender,
    //         payable(msg.sender),
    //         payable(address(this)),
    //         _price,
    //         true,
    //         false
    //     );

    //     emit NFTListed(_tokenId, msg.sender, msg.sender, address(this), _price);
    // }

    /**
     * @dev buyNft for buying listed nfts.
     * Requirement:
     * @param _tokenId- token id
     * Emits a {NFTSold} event.
     */

    // Buy an NFT
    function buyNft(uint256 _tokenId) public payable nonReentrant {
        NFT storage nft = _idToNFT[_tokenId];
        require(
            msg.value == nft.price / 1 wei,
            "Not enough ether to cover asking price"
        );
        address payable buyer = payable(msg.sender);
        payable(nft.seller).transfer(msg.value);

        _transfer(address(this), buyer, nft.tokenId);
        _marketOwner.transfer(LISTING_FEE);

        nft.owner = buyer;
        nft.listed = false;
        nft.sold = true;

        // getNftDetails[msg.sender].owner = buyer;
        // getNftDetails[msg.sender].listed = false;
        // getNftDetails[msg.sender].sold = true;

        _nftsSold.increment();
        emit NFTSold(nft.tokenId, nft.seller, buyer, msg.value,nft.category);
    }

    // Resell an NFT purchased from the marketplace
    function resellNft(uint256 _tokenId, uint256 _price)
        public
        payable
        nonReentrant
    {
        require(_price > 0, "Price must be at least 1 wei");
        require(msg.value == LISTING_FEE, "Not enough ether for listing fee");

        _transfer(msg.sender, address(this), _tokenId);

        NFT storage nft = _idToNFT[_tokenId];
        nft.seller = payable(msg.sender);
        nft.owner = payable(address(this));
        nft.listed = true;
        nft.sold = false;
        nft.price = _price;

        // getNftDetails[msg.sender].owner = address(this);
        // getNftDetails[msg.sender].seller = payable(msg.sender);
        // getNftDetails[msg.sender].listed = true;
        // getNftDetails[msg.sender].sold = false;
        // getNftDetails[msg.sender].price = _price;

        _nftsSold.decrement();
        emit NFTListed(_tokenId, msg.sender, msg.sender, address(this), _price,nft.category);
    }

    function getListingFee() public view returns (uint256) {
        return LISTING_FEE;
    }

    //Get Listed Nfts
    function getListedNfts() public view returns (NFT[] memory) {
        uint256 nftCount = _nftCount.current();
        uint256 unsoldNftsCount = nftCount - _nftsSold.current();

        NFT[] memory nfts = new NFT[](unsoldNftsCount);
        uint256 nftsIndex = 0;
        for (uint256 i = 0; i < nftCount; i++) {
            if (_idToNFT[i + 1].listed) {
                nfts[nftsIndex] = _idToNFT[i + 1];
                nftsIndex++;
            }
        }
        return nfts;
    }

    //Get Sold Nfts
    function getSoldNfts() public view returns (NFT[] memory) {
        uint256 nftCount = _nftCount.current();
        uint256 soldNftsCount = _nftsSold.current();

        NFT[] memory nfts = new NFT[](soldNftsCount);
        uint256 nftsIndex = 0;
        for (uint256 i = 0; i < nftCount; i++) {
            if (_idToNFT[i + 1].sold) {
                nfts[nftsIndex] = _idToNFT[i + 1];
                nftsIndex++;
            }
        }
        return nfts;
    }

    //Get My owned Nfts
    function getMyNfts() public view returns (NFT[] memory) {
        uint256 nftCount = _nftCount.current();
        uint256 myNftCount = 0;
        for (uint256 i = 0; i < nftCount; i++) {
            if (_idToNFT[i + 1].owner == msg.sender) {
                myNftCount++;
            }
        }

        NFT[] memory nfts = new NFT[](myNftCount);
        uint256 nftsIndex = 0;
        for (uint256 i = 0; i < nftCount; i++) {
            if (_idToNFT[i + 1].owner == msg.sender) {
                nfts[nftsIndex] = _idToNFT[i + 1];
                nftsIndex++;
            }
        }
        return nfts;
    }

    //Get My Listed Nfts
    function getMyListedNfts() public view returns (NFT[] memory) {
        uint256 nftCount = _nftCount.current();
        uint256 myListedNftCount = 0;
        for (uint256 i = 0; i < nftCount; i++) {
            if (
                _idToNFT[i + 1].seller == msg.sender && _idToNFT[i + 1].listed
            ) {
                myListedNftCount++;
            }
        }

        NFT[] memory nfts = new NFT[](myListedNftCount);
        uint256 nftsIndex = 0;
        for (uint256 i = 0; i < nftCount; i++) {
            if (
                _idToNFT[i + 1].seller == msg.sender && _idToNFT[i + 1].listed
            ) {
                nfts[nftsIndex] = _idToNFT[i + 1];
                nftsIndex++;
            }
        }
        return nfts;
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
