// On met un require pour importer les plugins que nous souhaitons utiliser
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

// Permet d'utiliser les variables d'environnement
require("dotenv").config();

// Je recupere mes deux variables d'environnement (dans le fichier .env)
const DEV_PRIVATE_KEY = process.env.PRIVATE_KEY;
const DEV_ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

// Ce module permet de definir vos preference
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17", // La version de solidity a utiliser

  gasReporter: { // Les parametre pour configurer l'outils de calculs des couts en gas sur vos contracts
    enabled: true,
    currency: 'EUR',
    gasPrice: 21
  }
};
