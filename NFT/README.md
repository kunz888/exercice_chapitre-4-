# NFT

## Tâche:

Créez une collection de tokens ERC721.

## Indications:

- Cette collection doit dériver du smart contract d'[openzepplin](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721#ERC721).
- Elle doit être compatible avec [opensea](https://docs.opensea.io/docs/metadata-standards).
- Elle doit contenir des metadatas pour chaque token uploadés sur IPFS telle que le nom, la description, l'image ...
- La collection doit avoir un nom et un symbole.
- Vous devez implémenter votre propre logique de mint en prenant juste en paramètre l'adresse du destinataire à travers la fonction `mint`.
- Le mint des tokens peut être pausable.
- Le `tokenId` doit être géré de manière automatique à l'aide de **Counters**.
- Le smart contract doit être sécurisé et optimisé.
- Le smart contract doit être déployé sur le testnet sepolia avec un environnement hardhat.

## Félicitations:

Vous savez maintenant créer une collection de NFT !!
