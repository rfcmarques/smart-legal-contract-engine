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
-- Table structure for table `states_log`
--

DROP TABLE IF EXISTS `states_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `states_log` (
  `idlog` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `state` int(11) NOT NULL,
  `contract` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  PRIMARY KEY (`idlog`),
  KEY `fk_states_log_states1_idx` (`state`),
  KEY `fk_states_log_contracts1_idx` (`contract`),
  KEY `fk_states_log_users1_idx` (`user`),
  CONSTRAINT `fk_states_log_contracts1` FOREIGN KEY (`contract`) REFERENCES `contracts` (`idContract`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_states_log_states1` FOREIGN KEY (`state`) REFERENCES `states` (`idState`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_states_log_users1` FOREIGN KEY (`user`) REFERENCES `users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states_log`
--

LOCK TABLES `states_log` WRITE;
/*!40000 ALTER TABLE `states_log` DISABLE KEYS */;
INSERT INTO `states_log` VALUES (2,'2021-09-21 16:39:47',5,2,2),(5,'2021-09-22 09:00:08',8,2,2),(14,'2021-09-22 11:17:55',5,20,5),(23,'2021-09-23 09:14:43',5,47,8),(26,'2021-09-23 09:19:22',8,47,8),(29,'2021-09-23 09:19:25',11,47,8),(32,'2021-09-23 10:34:26',5,11,2),(35,'2021-09-23 10:34:27',8,11,2),(38,'2021-09-23 10:34:36',5,23,2),(41,'2021-09-23 10:34:43',5,26,2),(44,'2021-09-23 10:34:45',8,26,2),(47,'2021-09-23 10:34:47',11,26,2),(50,'2021-09-23 10:35:00',5,44,2),(53,'2021-09-23 10:35:07',5,41,2);
/*!40000 ALTER TABLE `states_log` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`csousa`@`192.168.1.124`*/ /*!50003 TRIGGER `rmarquesdb`.`states_log_AFTER_INSERT` AFTER INSERT ON `states_log` FOR EACH ROW
BEGIN
UPDATE contracts SET currentstate=NEW.state where idContract=new.contract;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-23 17:49:53
