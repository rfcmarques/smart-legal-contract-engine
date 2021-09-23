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
  `hash` varchar(45) NOT NULL,
  `contractData` varchar(5000) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `currentstate` int(11) NOT NULL DEFAULT '2',
  `creator` int(11) NOT NULL,
  PRIMARY KEY (`idContract`),
  KEY `fk_contracts_states_idx` (`currentstate`),
  KEY `fk_contracts_users1_idx` (`creator`),
  CONSTRAINT `fk_contracts_states` FOREIGN KEY (`currentstate`) REFERENCES `states` (`idState`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_contracts_users1` FOREIGN KEY (`creator`) REFERENCES `users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contracts`
--

LOCK TABLES `contracts` WRITE;
/*!40000 ALTER TABLE `contracts` DISABLE KEYS */;
INSERT INTO `contracts` VALUES (2,'teste','{\"provider\":\"A\",\"providerNIF\":\"1\",\"providerRep\":\"A\",\"providerAddress\":\"A\",\"client\":\"A\",\"clientNIF\":\"1\",\"clientRep\":\"A\",\"clientAddress\":\"A\",\"inicialDate\":\"2021-09-21\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"1\",\"midPoints\":\"1\",\"highPoints\":\"1\",\"maxPoints\":\"1\",\"highPercentage\":\"1\",\"midPercentage\":\"1\",\"lowPercentage\":\"1\"}','2021-09-21 14:07:37',8,2),(11,'teste1','{\"provider\":\"Teste\",\"providerNIF\":\"123456789\",\"providerRep\":\"Teste\",\"providerAddress\":\"Teste\",\"client\":\"Teste\",\"clientNIF\":\"123456789\",\"clientRep\":\"Teste\",\"clientAddress\":\"Teste\",\"inicialDate\":\"2021-09-21\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"1\",\"midPoints\":\"1\",\"highPoints\":\"1\",\"maxPoints\":\"1\",\"highPercentage\":\"1\",\"midPercentage\":\"1\",\"lowPercentage\":\"1\"}','2021-09-21 15:08:18',8,2),(20,'teste','{\"provider\":\"Empresa XPTO\",\"providerNIF\":\"226711048\",\"providerRep\":\"Representante\",\"providerAddress\":\"Avenida do Fornecedor, 321, Fornecedor City\",\"client\":\"Rui FIlipe da Cunha Marques\",\"clientNIF\":\"226711048\",\"clientRep\":\"Clara Sofia Abreu Barros\",\"clientAddress\":\"Rua Luís Loureiro, 512\",\"inicialDate\":\"2021-09-22\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1234 EUR\",\"minPoints\":\"50\",\"lowPoints\":\"75\",\"midPoints\":\"85\",\"highPoints\":\"95\",\"maxPoints\":\"95\",\"highPercentage\":\"50\",\"midPercentage\":\"80\",\"lowPercentage\":\"90\"}','2021-09-22 09:53:25',5,5),(23,'teste','{\"provider\":\"Teste\",\"providerNIF\":\"1234\",\"providerRep\":\"Teste\",\"providerAddress\":\"Teste\",\"client\":\"Teste\",\"clientNIF\":\"1234\",\"clientRep\":\"Teste\",\"clientAddress\":\"Teste\",\"inicialDate\":\"2021-09-22\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"1\",\"midPoints\":\"1\",\"highPoints\":\"1\",\"maxPoints\":\"1\",\"highPercentage\":\"1\",\"midPercentage\":\"1\",\"lowPercentage\":\"1\"}','2021-09-22 14:17:21',5,2),(26,'teste','{\"provider\":\"A\",\"providerNIF\":\"1\",\"providerRep\":\"a\",\"providerAddress\":\"a\",\"client\":\"Contrato\",\"clientNIF\":\"123\",\"clientRep\":\"Contrato\",\"clientAddress\":\"Contrato\",\"inicialDate\":\"2021-09-22\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"1\",\"midPoints\":\"1\",\"highPoints\":\"1\",\"maxPoints\":\"1\",\"highPercentage\":\"1\",\"midPercentage\":\"1\",\"lowPercentage\":\"1\"}','2021-09-22 14:30:10',11,2),(29,'teste','{\"provider\":\"Teste\",\"providerNIF\":\"1\",\"providerRep\":\"Teste\",\"providerAddress\":\"Teste\",\"client\":\"Teste\",\"clientNIF\":\"1\",\"clientRep\":\"Teste\",\"clientAddress\":\"Teste\",\"inicialDate\":\"2021-09-22\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"1\",\"midPoints\":\"1\",\"highPoints\":\"1\",\"maxPoints\":\"1\",\"highPercentage\":\"1\",\"midPercentage\":\"1\",\"lowPercentage\":\"1\"}','2021-09-22 14:34:04',2,2),(32,'teste','{\"provider\":\"Rui\",\"providerNIF\":\"12345\",\"providerRep\":\"Rui\",\"providerAddress\":\"Rui\",\"client\":\"Rui\",\"clientNIF\":\"12345\",\"clientRep\":\"Rui\",\"clientAddress\":\"Rui\",\"inicialDate\":\"2021-09-22\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"2\",\"midPoints\":\"3\",\"highPoints\":\"4\",\"maxPoints\":\"4\",\"highPercentage\":\"5\",\"midPercentage\":\"6\",\"lowPercentage\":\"7\"}','2021-09-22 14:37:23',2,2),(35,'teste','{\"provider\":\"a\",\"providerNIF\":\"1\",\"providerRep\":\"a\",\"providerAddress\":\"a\",\"client\":\"a\",\"clientNIF\":\"1\",\"clientRep\":\"a\",\"clientAddress\":\"a\",\"inicialDate\":\"2021-09-22\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"1\",\"midPoints\":\"1\",\"highPoints\":\"1\",\"maxPoints\":\"1\",\"highPercentage\":\"1\",\"midPercentage\":\"1\",\"lowPercentage\":\"1\"}','2021-09-22 14:43:57',2,2),(38,'teste','{\"provider\":\"A\",\"providerNIF\":\"1\",\"providerRep\":\"A\",\"providerAddress\":\"A\",\"client\":\"A\",\"clientNIF\":\"1\",\"clientRep\":\"A\",\"clientAddress\":\"A\",\"inicialDate\":\"2021-09-22\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"1\",\"midPoints\":\"1\",\"highPoints\":\"1\",\"maxPoints\":\"1\",\"highPercentage\":\"1\",\"midPercentage\":\"1\",\"lowPercentage\":\"1\"}','2021-09-22 14:47:13',2,2),(41,'teste','{\"provider\":\"a\",\"providerNIF\":\"1\",\"providerRep\":\"a\",\"providerAddress\":\"a\",\"client\":\"A\",\"clientNIF\":\"1\",\"clientRep\":\"a\",\"clientAddress\":\"a\",\"inicialDate\":\"2021-09-22\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"1\",\"midPoints\":\"1\",\"highPoints\":\"1\",\"maxPoints\":\"1\",\"highPercentage\":\"1\",\"midPercentage\":\"1\",\"lowPercentage\":\"1\"}','2021-09-22 14:48:26',5,2),(44,'teste','{\"provider\":\"a\",\"providerNIF\":\"1\",\"providerRep\":\"a\",\"providerAddress\":\"a\",\"client\":\"a\",\"clientNIF\":\"1\",\"clientRep\":\"a\",\"clientAddress\":\"a\",\"inicialDate\":\"2021-09-22\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1 EUR\",\"minPoints\":\"1\",\"lowPoints\":\"1\",\"midPoints\":\"1\",\"highPoints\":\"1\",\"maxPoints\":\"1\",\"highPercentage\":\"1\",\"midPercentage\":\"1\",\"lowPercentage\":\"1\"}','2021-09-22 14:49:20',5,2),(47,'teste','{\"provider\":\"Provider Teste\",\"providerNIF\":\"987654321\",\"providerRep\":\"Representante do Fornencedor\",\"providerAddress\":\"Avenida do Fornecedor, 321, Fornecedor City\",\"client\":\"Cliente Teste\",\"clientNIF\":\"123456789\",\"clientRep\":\"Respresentante de Teste\",\"clientAddress\":\"Rua de Teste\",\"inicialDate\":\"2021-09-23\",\"contractDuration\":\"1 anos\",\"serviceCost\":\"1234 EUR\",\"minPoints\":\"23\",\"lowPoints\":\"45\",\"midPoints\":\"67\",\"highPoints\":\"89\",\"maxPoints\":\"89\",\"highPercentage\":\"12\",\"midPercentage\":\"34\",\"lowPercentage\":\"56\"}','2021-09-23 08:46:49',11,8);
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

-- Dump completed on 2021-09-23 17:49:52
