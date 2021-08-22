-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-08-22 10:12:07
-- 伺服器版本： 10.4.19-MariaDB
-- PHP 版本： 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `mffee7_4_db`
--

-- --------------------------------------------------------

--
-- 資料表結構 `user_collection`
--

CREATE TABLE `user_collection` (
  `id` tinyint(4) NOT NULL,
  `user_id` tinyint(4) NOT NULL,
  `video_id` tinyint(4) NOT NULL,
  `product_id` tinyint(4) NOT NULL,
  `article_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `user_collection`
--

INSERT INTO `user_collection` (`id`, `user_id`, `video_id`, `product_id`, `article_id`) VALUES
(1, 1, 0, 0, 1),
(2, 1, 0, 0, 2);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `user_collection`
--
ALTER TABLE `user_collection`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_collection`
--
ALTER TABLE `user_collection`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
