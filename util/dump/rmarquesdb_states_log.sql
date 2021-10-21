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
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states_log`
--

LOCK TABLES `states_log` WRITE;
/*!40000 ALTER TABLE `states_log` DISABLE KEYS */;
INSERT INTO `states_log` VALUES (2,'2021-09-21 16:39:47',5,2,2),(5,'2021-09-22 09:00:08',8,2,2),(14,'2021-09-22 11:17:55',5,20,5),(23,'2021-09-23 09:14:43',5,47,8),(26,'2021-09-23 09:19:22',8,47,8),(29,'2021-09-23 09:19:25',11,47,8),(32,'2021-09-23 10:34:26',5,11,2),(35,'2021-09-23 10:34:27',8,11,2),(38,'2021-09-23 10:34:36',5,23,2),(41,'2021-09-23 10:34:43',5,26,2),(44,'2021-09-23 10:34:45',8,26,2),(47,'2021-09-23 10:34:47',11,26,2),(50,'2021-09-23 10:35:00',5,44,2),(53,'2021-09-23 10:35:07',5,41,2),(56,'2021-09-24 16:18:06',5,65,2),(59,'2021-09-24 16:18:27',5,29,2),(62,'2021-10-04 15:08:22',5,32,2),(65,'2021-10-04 15:52:15',5,35,2),(68,'2021-10-06 10:38:30',8,23,2),(71,'2021-10-06 10:58:45',11,2,2),(74,'2021-10-06 11:04:37',11,11,2),(77,'2021-10-06 11:06:21',5,83,2),(80,'2021-10-06 13:39:22',11,23,2),(83,'2021-10-06 13:48:16',5,86,8),(86,'2021-10-06 13:53:44',8,86,8),(89,'2021-10-06 13:53:56',11,86,8),(92,'2021-10-06 14:56:59',5,89,8),(95,'2021-10-06 14:58:00',8,89,8),(98,'2021-10-06 14:59:21',5,92,8),(101,'2021-10-06 14:59:38',11,92,8),(104,'2021-10-07 08:37:00',5,95,2),(107,'2021-10-07 08:40:01',5,98,2),(110,'2021-10-07 08:40:45',8,98,2),(113,'2021-10-07 08:40:51',11,98,2),(116,'2021-10-13 16:25:34',5,101,2),(119,'2021-10-14 08:46:51',5,38,2),(122,'2021-10-18 16:55:22',8,101,2);
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

-- Dump completed on 2021-10-21 16:00:33
