CREATE DATABASE  IF NOT EXISTS `rmarquesdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `rmarquesdb`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: hag-pre.intranet.digitalsign.pt    Database: rmarquesdb
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contracts`
--

DROP TABLE IF EXISTS `contracts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contracts` (
  `idContract` int(11) NOT NULL AUTO_INCREMENT,
  `contracthash` varchar(45) NOT NULL,
  `data` varchar(5000) NOT NULL,
  `creator` int(11) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idContract`),
  KEY `fk_contracts_user_idx` (`creator`),
  CONSTRAINT `fk_contracts_user` FOREIGN KEY (`creator`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contracts`
--

LOCK TABLES `contracts` WRITE;
/*!40000 ALTER TABLE `contracts` DISABLE KEYS */;
INSERT INTO `contracts` VALUES (1,'teste','{\"provider\":\"Cunha\",\"providerNIF\":\"987654321\",\"providerRep\":\"Marques\",\"providerAddress\":\"Avenida\",\"client\":\"Rui\",\"clientNIF\":\"123456789\",\"clientRep\":\"Filipe\",\"clientAddress\":\"Rua\",\"inicialDate\":\"2021-09-15\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1234 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"2\",\"midPoints\":\"3\",\"highPoints\":\"4\",\"maxPoints\":\"4\",\"highPercentage\":\"5\",\"midPercentage\":\"6\",\"lowPercentage\":\"7\"}',1,'2021-09-15 10:09:29'),(4,'teste','{\"provider\":\"Cunha\",\"providerNIF\":\"987654321\",\"providerRep\":\"Marques\",\"providerAddress\":\"Avenida\",\"client\":\"Rui\",\"clientNIF\":\"123456789\",\"clientRep\":\"Filipe\",\"clientAddress\":\"Rua\",\"inicialDate\":\"2021-09-15\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1234 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"2\",\"midPoints\":\"3\",\"highPoints\":\"4\",\"maxPoints\":\"4\",\"highPercentage\":\"5\",\"midPercentage\":\"6\",\"lowPercentage\":\"7\"}',1,'2021-09-15 10:29:29'),(7,'teste','{\"provider\":\"Altice\",\"providerNIF\":\"501456789\",\"providerRep\":\"Filipe Gomes\",\"providerAddress\":\"Avenida da Liberdade\",\"client\":\"Sofia Barros\",\"clientNIF\":\"223344551\",\"clientRep\":\"Rui Marques\",\"clientAddress\":\"Rua dos Tojais\",\"inicialDate\":\"2021-09-16\",\"contractDuration\":\"2 meses\",\"serviceCost\":\"2300 EUR\",\"minPoints\":\"50\",\"lowPoints\":\"75\",\"midPoints\":\"85\",\"highPoints\":\"95\",\"maxPoints\":\"95\",\"highPercentage\":\"50\",\"midPercentage\":\"80\",\"lowPercentage\":\"90\"}',13,'2021-09-16 10:10:36'),(8,'teste','{\"provider\":\"Fornecedor\",\"providerNIF\":\"987654321\",\"providerRep\":\"Representante do Fornencedor\",\"providerAddress\":\"Avenida do Fornecedor, 321, Fornecedor City\",\"client\":\"Cliente\",\"clientNIF\":\"123456789\",\"clientRep\":\"Representatante de Cliente\",\"clientAddress\":\"Rua do Cliente de Teste, 123, Cidade do Cliente\",\"inicialDate\":\"2021-09-20\",\"contractDuration\":\"2 meses\",\"serviceCost\":\"4321 EUR\",\"minPoints\":\"50\",\"lowPoints\":\"75\",\"midPoints\":\"85\",\"highPoints\":\"95\",\"maxPoints\":\"95\",\"highPercentage\":\"50\",\"midPercentage\":\"80\",\"lowPercentage\":\"90\"}',1,'2021-09-20 11:29:09'),(11,'teste','{\"provider\":\"Teste\",\"providerNIF\":\"123\",\"providerRep\":\"Teste\",\"providerAddress\":\"Teste\",\"client\":\"Teste\",\"clientNIF\":\"12345\",\"clientRep\":\"Teste\",\"clientAddress\":\"Teste\",\"inicialDate\":\"2021-09-20\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"1\",\"midPoints\":\"1\",\"highPoints\":\"1\",\"maxPoints\":\"1\",\"highPercentage\":\"1\",\"midPercentage\":\"1\",\"lowPercentage\":\"1\"}',1,'2021-09-20 16:14:28');
/*!40000 ALTER TABLE `contracts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-20 17:48:43
