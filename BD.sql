-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 06, 2020 at 12:39 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projet_jee`
--

-- --------------------------------------------------------

--
-- Table structure for table `chef_projet`
--

DROP TABLE IF EXISTS `chef_projet`;
CREATE TABLE IF NOT EXISTS `chef_projet` (
  `id_chef_projet` int(11) NOT NULL,
  `nom_chef_projet` varchar(20) NOT NULL,
  `prenom_chef_projet` varchar(20) NOT NULL,
  `email_chef_projet` varchar(50) NOT NULL,
  `password_chef_projet` varchar(20) NOT NULL,
  PRIMARY KEY (`id_chef_projet`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chef_projet`
--

INSERT INTO `chef_projet` (`id_chef_projet`, `nom_chef_projet`, `prenom_chef_projet`, `email_chef_projet`, `password_chef_projet`) VALUES
(1, 'Lahlali', 'Hatim', 'hatim@gmail.com', '0000');

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

DROP TABLE IF EXISTS `employe`;
CREATE TABLE IF NOT EXISTS `employe` (
  `id_emp` int(11) NOT NULL,
  `nom_emp` varchar(20) NOT NULL,
  `prenom_emp` varchar(20) NOT NULL,
  `email_emp` varchar(50) NOT NULL,
  `password_emp` varchar(20) NOT NULL,
  `etat_emp` varchar(100) NOT NULL,
  `id_chef_projet` int(11) NOT NULL,
  PRIMARY KEY (`id_emp`),
  KEY `id_chef_projet` (`id_chef_projet`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`id_emp`, `nom_emp`, `prenom_emp`, `email_emp`, `password_emp`, `etat_emp`, `id_chef_projet`) VALUES
(0, 'to_all', 'to_all', 'to_all@all.com', 'all', 'admin', 1),
(1, 'maanan', 'khaoula', 'khaoula@gmail.com', '0000', 'psycho', 1),
(2, 'Zehnine', 'Ghizlane', 'ghizlane@gmail.com', '0000', 'psycho', 1),
(3, 'Lekmad', 'Mohamed', 'mohamed@gmail.com', '0000', 'Malade', 1),
(4, 'Dalil', 'Wafaa', 'wafaa @gmail.com', '0000', 'Saine', 1),
(5, 'Zaimi', 'Soukaina', 'soukaina@gmail.com', '0000', 'Saine', 1);

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
CREATE TABLE IF NOT EXISTS `files` (
  `id_file` int(11) NOT NULL AUTO_INCREMENT,
  `content_file` longblob NOT NULL,
  `id_chef_projet` int(11) NOT NULL,
  PRIMARY KEY (`id_file`),
  KEY `c` (`id_chef_projet`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `files_recommandation`
--

DROP TABLE IF EXISTS `files_recommandation`;
CREATE TABLE IF NOT EXISTS `files_recommandation` (
  `id_recommandation` int(11) NOT NULL AUTO_INCREMENT,
  `content_recommandation` longblob NOT NULL,
  `id_chef_projet` int(11) NOT NULL,
  PRIMARY KEY (`id_recommandation`),
  UNIQUE KEY `id_chef_projet` (`id_chef_projet`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `file_employe`
--

DROP TABLE IF EXISTS `file_employe`;
CREATE TABLE IF NOT EXISTS `file_employe` (
  `id_file` int(11) NOT NULL,
  `id_emp` int(11) NOT NULL,
  `id_reponse` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_file`,`id_emp`),
  KEY `k1` (`id_file`) USING BTREE,
  KEY `k2` (`id_emp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `file_rec_emp`
--

DROP TABLE IF EXISTS `file_rec_emp`;
CREATE TABLE IF NOT EXISTS `file_rec_emp` (
  `id_recommandation` int(11) NOT NULL,
  `id_employe` int(11) NOT NULL,
  PRIMARY KEY (`id_recommandation`,`id_employe`),
  KEY `file2` (`id_employe`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
CREATE TABLE IF NOT EXISTS `reponse` (
  `id_reponse` int(11) NOT NULL AUTO_INCREMENT,
  `content_file_reponse` longblob NOT NULL,
  PRIMARY KEY (`id_reponse`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employe`
--
ALTER TABLE `employe`
  ADD CONSTRAINT `employe_ibfk_1` FOREIGN KEY (`id_chef_projet`) REFERENCES `chef_projet` (`id_chef_projet`);

--
-- Constraints for table `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `c` FOREIGN KEY (`id_chef_projet`) REFERENCES `chef_projet` (`id_chef_projet`);

--
-- Constraints for table `files_recommandation`
--
ALTER TABLE `files_recommandation`
  ADD CONSTRAINT `C322` FOREIGN KEY (`id_chef_projet`) REFERENCES `chef_projet` (`id_chef_projet`);

--
-- Constraints for table `file_employe`
--
ALTER TABLE `file_employe`
  ADD CONSTRAINT `c1` FOREIGN KEY (`id_file`) REFERENCES `files` (`id_file`),
  ADD CONSTRAINT `c2` FOREIGN KEY (`id_emp`) REFERENCES `employe` (`id_emp`);

--
-- Constraints for table `file_rec_emp`
--
ALTER TABLE `file_rec_emp`
  ADD CONSTRAINT `file1` FOREIGN KEY (`id_recommandation`) REFERENCES `files_recommandation` (`id_recommandation`),
  ADD CONSTRAINT `file2` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_emp`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
