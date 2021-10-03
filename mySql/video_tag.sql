-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021 年 10 月 03 日 12:11
-- 伺服器版本： 10.4.19-MariaDB
-- PHP 版本： 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `iSport`
--

-- --------------------------------------------------------

--
-- 資料表結構 `video_tag`
--

CREATE TABLE `video_tag` (
  `id` int(11) NOT NULL,
  `video_id` int(6) UNSIGNED NOT NULL,
  `tag_id` int(6) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `video_tag`
--

INSERT INTO `video_tag` (`id`, `video_id`, `tag_id`) VALUES
(1, 1, 1),
(2, 2, 5),
(3, 11, 1),
(4, 12, 5),
(5, 7, 2),
(6, 9, 3),
(7, 16, 5),
(8, 4, 5),
(9, 15, 1),
(10, 8, 3),
(11, 17, 1),
(12, 10, 1),
(13, 3, 2),
(14, 20, 2),
(15, 18, 3),
(16, 6, 1),
(17, 21, 2),
(18, 19, 6),
(19, 13, 5),
(20, 5, 3),
(21, 23, 5),
(22, 22, 4),
(23, 25, 1),
(24, 26, 4),
(25, 27, 1),
(26, 28, 3),
(27, 29, 6),
(28, 30, 6);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `video_tag`
--
ALTER TABLE `video_tag`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `video_tag`
--
ALTER TABLE `video_tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
