# DeFi

## Tâche:

Créez un DEX simplifié.

## Indications:

Pour cette version du DEX, vous devrez faire quatre smart contracts:
  - Deux contrats qui dérivent du contrat [ERC20](https://docs.openzeppelin.com/contracts/4.x/erc20).
  - Un contrat pour l'oracle qui définit le prix entre les deux tokens.
  - Un contrat pour le DEX.
Vous devez tout d'abord créer deux contracts représentant les deux tokens que vous allez utiliser dans votre DEX.

Ensuite créez un Oracle qui sera update via une API que vous allez créer dans le langage de votre choix.\
Il doit récupérer le prix entre les deux tokens et le stocker sur un smart contract solidity.

Enfin créez votre dex qui va vous permettre de swap vos tokens.\
C'est un DEX simplifié donc il n'y aura pas de pool de liquidité sur un autre smart contract, tout sera fait sur le même contrat et pour plus de simplicité seul le swap entre deux tokens est demandé.

Il doit y avoir:
  - Une fonction `setTokens` qui permet de définir l'adresse des tokens que vous utilisez dans votre dex.
  - Une fonction `setOracle` qui permet de définir l'adresse de votre oracle.
  - Une fonction `addLiquidity` qui permet à un utilisateur de déposer de la liquidité dans le dex en spécifiant le montant et le token à déposer.
  - Une fonction `removeLiquidity` qui permet à un utilisateur de retirer de la liquidité dans le dex en spécifiant le montant et le token à déposer.
  - Une fonction `swap` qui permet à un utilisateur de swap son token vers un autre token.
  - Une fonction `getSwapAmount` qui se base sur le prix de l'oracle pour calculer ce que l'utilisateur va recevoir pour le swap d'un token vers un autre avec un certain montant.

Le processus de `swap` se déroule de la sorte:
  - L'utilisateur `approve` le transfert d'un token par le DEX.
  - La fonction `swap` est ensuite appellée.

Le processus d'ajout de liquidité se déroule de la sorte:
  - L'utilisateur `approve` le transfert des deux tokens par le DEX.
  - La fonction `addLiquidity` est ensuite appellée.

Faîte des tests pour être sûr que toutes les fonctionnalités sont présentes.

Déployez le smart contract sur le testnet sepolia avec un environnement hardhat.

## Félicitations:

Vous savez maintenant comment créer un DEX !! C'est un des composants de la DeFi les plus importants et les plus anciens.
