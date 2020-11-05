-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: snapsell
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `listing`
--

DROP TABLE IF EXISTS `listing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` int(11) NOT NULL,
  `fk_poster_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_poster_id_idx` (`fk_poster_id`),
  CONSTRAINT `fk_poster_id` FOREIGN KEY (`fk_poster_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listing`
--

LOCK TABLES `listing` WRITE;
/*!40000 ALTER TABLE `listing` DISABLE KEYS */;
INSERT INTO `listing` VALUES (1,'iPhone 6s Used','In good condition. Camera and screen not working but it can be fixed!',250,1,'2020-01-03 14:47:06','https://media.karousell.com/media/photos/products/2019/07/16/iphone_6s_used_128gb_1563257256_627d6a23_progressive.jpg'),(2,'Calculator','BA II Plus Texas Instruments calculator.  Pass your CFA with this! Pick up only in River Valley :)',25,4,'2020-01-04 14:36:24','https://education.ti.com/-/media/ti/education/images/products/product-details/financials/product-baii-plus-feature.png?rev=5de57c75-f8d5-4fce-9b0e-44692be78278&h=506&w=250&la=en&hash=2991A994842EED064E07B37539C2B45D3DAAF773'),(3,'Retina Macbook Air 2018','16GB Ram & 256 SSD. Beautiful laptop that was used sparingly for 10 months.',1600,1,'2020-01-04 14:45:33','https://assets.pcmag.com/media/images/527011-macbook-air-2018.jpg'),(4,'Elective Geography Textbook Bundle','Complete Elective Geography Textbook bundle for GCE O Levels! Includes all 2 books',30,2,'2020-01-04 15:07:48','https://media.karousell.com/media/photos/products/2019/07/24/elective_geography_textbook_1563930637_dfa3e1fd.jpg'),(5,'Vans Old Skool','US Men 5.5 / US Women 7.0. Condition is 10/10. Worn only once',85,3,'2020-01-04 15:25:12','https://ddpzd2b97pj2g.cloudfront.net/pub/media/catalog/product/large/VN000D3HY281_OLDSKOOL_2.jpg'),(6,'My Kidney','Need it to pay rent and debt',85000,5,'2020-01-04 16:21:30','https://assets.newatlas.com/dims4/default/3121843/2147483647/strip/true/crop/1525x1018+0+60/resize/1160x774!/quality/90/?url=https%3A%2F%2Fassets.newatlas.com%2F88%2Fca%2F468f7bd2403da5e5a37dcd9772ad%2Fdepositphotos-106707314-l-2015.jpg'),(7,'Adidas Sandals','In very good condition! Barely worn. Very comfy!',24,6,'2020-01-05 11:26:25','https://www.adidas.com.sg/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dw43ff5121/zoom/F35543_01_standard.jpg'),(8,'DW Collector\'s Jazz Series Shells','These amazing looking and sounding drums are virtually unplayed. They are in excellent condition and still have the factory heads with a full life of use on them still. This 4 piece shell pack only includes the bass drum, 2 rack toms, and a floor tom. Floor tom legs are included, but mounts for the rack toms are separate. All heads, tension rods and rims are included.',4590,7,'2020-01-05 11:47:12','https://media.karousell.com/media/photos/products/2017/12/14/dw_collectors_jazz_series_shells_1513188078_33a5bff0.jpg'),(9,'Tama Star Classic 7 Piece Set','Selling these beautiful, Japanese-made 7 piece kit! Does not come with cymbals. Comes with an Iron Cobra double pedal, a snare stand and a hi-hat stand. In excellent condition :)',7000,7,'2020-01-05 11:47:12','https://media.karousell.com/media/photos/products/2015/09/12/tama_star_classic_7_piece_1442054059_9dcebe77.jpg'),(10,'Istanbul Mehmet Tony Williams Cymbal Set','Brand new Istanbul Mehmet Tony Williams Tribute Cymbal Set for sale!This set is made to replicate drumming great Tony Williams\' old K cymbals. Istanbul Mehmet took the original cymbals to study it in detail before developing this set. The result is a sonically matching cymbal sound!',2670,7,'2020-01-05 11:47:12','https://www.rainbowguitars.com/imagesproduct/is/istwltd-xl.jpg'),(11,'Meinl Byzance Vintage Sand Cymbal Set','The matched Byzance Sand Cymbal Set includes a 14” Sand Hat, 18” Sand Thin Crash and a 20” Sand Ride. This set is the perfect introduction to the world of Byzance Vintage sounds and is a must have for all fans of Benny Greb’s drumming and sound and for fans of musical cymbals in general.﻿',1370,7,'2020-01-05 11:47:12','https://meinlcymbals.com/typo3temp/firelike/@3510_68088c696244bbe28a980eb1963a7313-1180-1180.png'),(12,'64 Audio V6S','The 1964 V6-Stage is an extremely coherent and 3-dimensional 6-driver custom in ear monitor. Its rich, spacious and detailed sound presentation is sure to make it a new standard for stage, studio and everyday music listening. Like all 1964 Ears custom IEMs, the V6-Stage monitors are inherently noise canceling and are designed to work well with a wide range of personal audio devices as well as all wired and wireless monitor systems.',650,7,'2020-01-05 11:47:12','https://theheadphonelist-theheadphonelist.netdna-ssl.com/wp-content/uploads/2013/11/1964EARS-V6-Stage.jpg'),(13,'Pure History Textbook Bundle','Complete Pure History Textbook bundle for GCE O Levels! Includes all 4 books',45,2,'2020-01-05 11:47:12','https://media.karousell.com/media/photos/products/2017/01/04/all_about_history_o_level_history_textbooks_1483511049_57df42d1.jpg'),(14,'Haribo Goldbears','Delicious Haribo gummy bears! The original since 1992',2,8,'2020-01-14 09:53:55','https://target.scene7.com/is/image/Target/GUEST_6dd9cafa-a037-4ded-b686-dde4f43b41ea?wid=488&hei=488&fmt=pjpeg'),(16,'Xiaomi A1','Selling my pre-loved Xiaomi A1! Had it since 2018. Selling it because I\'m getting a new phone!',150,6,'2020-01-30 08:34:01','https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2017/09/xiaomi-mi-a1-9.jpg?itok=ZUDlford'),(17,'Hooligans Jersey','Get your authentic jerseys now!',300,10,'2020-02-06 08:06:12','https://media.karousell.com/media/photos/products/2018/07/21/bruno_mars_hooligans_jersey_1532146149_72af6eda_progressive.jpg'),(18,'Unorthodox Jukebox - CD Album','Get my Album!',12,10,'2020-02-06 08:07:15','https://www.brunomars.com/sites/g/files/g2000006216/f/styles/photo_detail_large/public/201611/Bruno_Unorthodox_Jukebox_Final.jpg?itok=I8u9JWaK'),(19,'XXIV Magic - CD Album','Get my Album!',12,10,'2020-02-06 08:07:31','https://upload.wikimedia.org/wikipedia/en/4/47/Bruno_Mars_%26_R3hab_-_24K_Magic_remix.jpg'),(20,'Doo Woops and Hooligans - CD Album','Get my Album!',12,10,'2020-02-06 08:07:51','https://upload.wikimedia.org/wikipedia/en/a/af/Doo-Wops_%26_Hooligans.jpg'),(21,'Fender Japan Modern Stratocaster','Fender\'s “MADE IN JAPAN MODERN SERIES\" features guitars with updated playability and sound to meet the needs of modern technical players. A streamlined body that embodies a sense of speed, a compound radius neck with high playability, and a locking tuner that provides stable tuning even in intense play. The series also features 4th generation noiseless pickups that are also used in the American Elite series.',2000,9,'2020-02-08 15:44:25','https://cdn.shopify.com/s/files/1/2501/6068/products/F03-528-0400-362_1564549876520_1600x1600_crop_center.jpg?v=1580183397'),(22,'Apple Airpods','Brand new (in box, sealed in plastic) Apple AirPods with charging case. One of the best bluetooth earphones out there. Get yours now!',168,1,'2020-02-09 16:38:56','https://media.karousell.com/media/photos/products/2020/02/09/apple_airpods_1581233839_c93f67dd_progressive.jpg'),(24,'Harmony Hemp Guitar Strap, Cream','Harmony Cotton Guitar Straps are 2” thick and feature antique brass hardware for a familiar look and feel. Adjustable from 39” to 58” and available in cream or black. Made in Canada.',25,9,'2020-02-09 16:57:12','https://cdn.shopify.com/s/files/1/2501/6068/products/HMN-025000_1571212766750_800x800_crop_center.jpg?v=1571212773'),(25,'Taylor 714ce-LTD Rosewood','Capitalising on the opportunity to play with new tonewood combinations for our limited edition guitars, this 2019 714ce LTD features a unique combination of Indian rosewood back and sides with a sinker redwood top. Indian rosewood is an all-star tonewood with a vibrant sonic personality that ranges from warm and responsive in the bass range to rich and shimmery on the treble end, with a scooped midrange that makes it an ideal wood choice for guitarists who sing while they play.',5000,9,'2020-02-09 16:59:35','https://cdn.shopify.com/s/files/1/2501/6068/products/T25-714CE-LTD-V-2019_1569483818970_800x800_crop_center.jpg?v=1578560099');
/*!40000 ALTER TABLE `listing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `offer` int(11) NOT NULL,
  `fk_listing_id` int(11) NOT NULL,
  `fk_offeror_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_listing_id_idx` (`fk_listing_id`),
  KEY `fk_offeror_id_idx` (`fk_offeror_id`),
  CONSTRAINT `fk_listing_id` FOREIGN KEY (`fk_listing_id`) REFERENCES `listing` (`id`),
  CONSTRAINT `fk_offeror_id` FOREIGN KEY (`fk_offeror_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (1,200,1,3,'2020-01-05 11:48:47'),(2,245,1,2,'2020-01-05 12:54:55'),(3,240,1,2,'2020-01-05 12:55:05'),(5,12,18,6,'2020-02-09 19:46:32'),(6,299,17,6,'2020-02-09 20:00:20'),(7,299,17,4,'2020-02-09 20:41:20'),(8,299,14,4,'2020-02-09 20:41:34'),(9,1360,11,4,'2020-02-09 22:23:26'),(10,4995,25,7,'2020-02-09 22:23:59');
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `profile_pic_url` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'steve_jobs','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/800px-Steve_Jobs_Headshot_2010-CROP2.jpg','2019-06-20 10:54:57','$2a$10$FkaEtxqPwTUbOGwcsEqH6uAv067ldHUO55POQ2njW.Q6qaU9wcsGy'),(2,'tooniak','https://i.redd.it/64dgte7jgxr21.jpg','2020-01-02 16:36:11','$2a$10$BRrzCcy.qmF55j.Be3J1J.CvabhLe5euSj7q4bOz/rv0VzCsdUg1m'),(3,'chocolaterain','https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg','2020-01-04 14:40:17','$2a$10$5QFRFCg2hdUk.qtgPrVhnOQ3AZA636mcsD8pyIjiPckvJ2TGJAOIi'),(4,'cerealkillah','https://img.memecdn.com/cereal-killer_o_61413.jpg','2020-01-02 16:41:06','$2a$10$OYZ/lwymyELpR2tXYQxIIuRTwPqKbp/nCckfvSgQD6IiKpaShVlwC'),(5,'thebodyshop','https://www.verywellmind.com/thmb/NJDwdo-OsRHhnPHQgHR3ymdvatU=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-467650193-5715b2f03df78c3fa26c3e3a.jpg','2020-01-02 17:05:28','$2a$10$PYLe30iqp/uhfH6k2JALe.4CfpdbqbjWn/u49.6Qab4wae3IUi2Wu'),(6,'jev0n_','https://notion.online/wp-content/uploads/2019/10/NotionxJevon_PhotogJuanOrtiz_5-545x750.jpg','2020-01-05 11:24:35','$2a$10$zABdpSt4SONnFoQPIyuls.tfIOQoxpaok32koAKcu6Dxhb26.SgLu'),(7,'thedrummerco','https://thehub.musiciansfriend.com/images/drumsbuying/Gretsch-Drums-Buying-Guide-Header.jpg','2020-01-05 11:26:57','$2a$10$WNHnjIIEEJK7F797lbxZ2uWWcLhxA788KqjpzuW0bv8d87yuYEBIq'),(8,'yummygummy','https://www.albanesecandy.com/candy-store/pages/images/gummies.v2.jpg','2020-01-14 09:42:19','$2a$10$i22/wvz9/Eo6lGsRwn1nreboVLfKa/ei.ZJrX/ZIer5AcI7e680um'),(9,'sweetlakeguitars','https://www.guitarburningspeed.com/wp-content/uploads/2016/10/Young-man-playing-on-acoustic-practice-702x375.jpg','2020-02-05 05:38:27','$2a$10$vE57lkYSl.tiWdgl3mZwd.8HQPZUAuywFej8k6gI0CZPuc1Knm7le'),(10,'brunomars','https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/04/21/13/bruno-mars-interview.jpg?w968','2020-02-05 05:51:05','$2a$10$ICe3TrvXnrsiv20qjiy/qODnctCzDNY4uIXOgOEffjw87yl4ehLxe');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-10  6:25:07
