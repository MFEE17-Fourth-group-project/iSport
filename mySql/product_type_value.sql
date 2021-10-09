-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-10-06 06:12:46
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
-- 資料庫: `isport`
--

-- --------------------------------------------------------

--
-- 資料表結構 `product_type_value`
--

CREATE TABLE `product_type_value` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `type_id` int(10) UNSIGNED NOT NULL,
  `type_value` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product_type_value`
--

INSERT INTO `product_type_value` (`id`, `product_id`, `type_id`, `type_value`) VALUES
(1, 1, 1, '黑色'),
(2, 1, 1, '藍色'),
(3, 1, 1, '粉紅'),
(4, 1, 2, 'S'),
(5, 1, 2, 'M'),
(6, 1, 2, 'L'),
(7, 1, 2, 'XL'),
(8, 1, 2, '2XL'),
(9, 2, 1, '粉'),
(10, 2, 1, '灰'),
(11, 2, 1, '黑'),
(12, 3, 2, 'XS'),
(13, 3, 2, 'S'),
(14, 3, 2, 'M'),
(15, 3, 2, 'L'),
(16, 3, 2, 'XL'),
(17, 4, 1, '8mm(寶石紅)'),
(18, 4, 1, '8mm(珊瑚粉)'),
(19, 5, 4, 'B款'),
(20, 5, 4, 'C款'),
(21, 5, 2, 'UK 7 (25.5cm)'),
(22, 5, 2, 'UK 4(22.5cm)'),
(23, 5, 2, 'UK 7.5(26cm)'),
(24, 6, 1, '黑'),
(25, 6, 1, '紅'),
(26, 6, 2, 'S'),
(27, 6, 2, 'M'),
(28, 6, 2, 'L'),
(29, 6, 2, 'XL'),
(30, 7, 1, '黑'),
(31, 7, 2, 'S'),
(32, 7, 2, 'M'),
(33, 7, 2, 'L'),
(34, 8, 1, '黑'),
(35, 8, 2, 'S'),
(36, 8, 2, 'M'),
(37, 8, 2, 'L'),
(38, 8, 2, 'XL'),
(39, 8, 2, 'XXL'),
(40, 9, 1, '黑'),
(41, 9, 2, 'XS'),
(42, 9, 2, 'S'),
(43, 9, 2, 'M'),
(44, 9, 2, 'L'),
(45, 10, 2, 'A/M'),
(46, 10, 2, 'A/L'),
(47, 11, 2, 'S'),
(48, 11, 2, 'M'),
(49, 11, 2, 'L'),
(50, 11, 2, 'XL'),
(51, 11, 2, 'XXL'),
(52, 11, 1, '麻花灰'),
(53, 11, 1, '麻花藍'),
(54, 12, 1, '黑'),
(55, 12, 1, '粉'),
(56, 12, 2, 'S'),
(57, 12, 2, 'M'),
(58, 12, 2, 'L'),
(59, 13, 2, 'UK7'),
(60, 13, 2, 'UK7.5'),
(61, 13, 2, 'UK8'),
(62, 13, 2, 'UK8.5'),
(63, 13, 2, 'UK9'),
(64, 13, 2, 'UK9.5'),
(65, 13, 2, 'UK10'),
(66, 13, 2, 'UK10.5'),
(67, 14, 1, '藏青黑白'),
(68, 14, 2, '27'),
(69, 14, 2, '28'),
(70, 14, 2, '28.5'),
(71, 14, 2, '29'),
(72, 15, 2, 'UK 7(25.5cm)'),
(73, 15, 2, 'UK 7.5(26cm)'),
(74, 15, 2, 'UK 8(26.5cm)'),
(75, 15, 2, 'UK 8.5(27cm)'),
(76, 15, 2, 'UK 9(27.5cm)'),
(77, 15, 2, 'UK 9.5(28cm)'),
(78, 15, 2, 'UK 10(28.5cm)'),
(79, 15, 2, 'UK 10.5(29cm)'),
(80, 16, 2, '27'),
(81, 16, 2, '27.5'),
(82, 16, 2, '28'),
(83, 16, 2, '28.5'),
(84, 16, 2, '29'),
(85, 16, 2, '29.5'),
(86, 17, 2, 'US5.5/22.5CM'),
(87, 17, 2, 'US6/23CM'),
(88, 17, 2, 'US6.5/23.5CM'),
(89, 17, 2, 'US7/24CM'),
(90, 17, 2, 'US7.5/24.5CM'),
(91, 17, 2, 'US8/25CM'),
(92, 17, 2, 'US8.5/25.5CM'),
(93, 18, 2, 'UK6'),
(94, 18, 2, 'UK4.5'),
(95, 19, 2, '23.5CM/US6.5'),
(96, 19, 2, '24CM/US7'),
(97, 19, 2, '24.5CM/US7.5'),
(98, 19, 2, '25CM/US8'),
(99, 19, 2, '25.5CM/US8.5'),
(100, 20, 2, '23.5'),
(101, 20, 2, '25.0'),
(102, 20, 2, '25.5'),
(103, 21, 1, 'A款_白色'),
(104, 21, 1, 'B款_深藍'),
(105, 21, 1, 'C款_灰色'),
(106, 21, 1, 'D款_粉色'),
(107, 21, 2, 'uk4(22.5cm)'),
(108, 21, 2, 'uk4.5(23cm)'),
(109, 21, 2, 'uk5(23.5cm)'),
(110, 21, 2, 'uk5.5(24cm)'),
(111, 21, 2, 'uk6(24.5cm)'),
(112, 22, 4, '1kg'),
(113, 22, 4, '2kg'),
(114, 22, 4, '3kg'),
(115, 22, 4, '4kg'),
(116, 22, 4, '5kg'),
(117, 23, 4, '1kg'),
(118, 23, 4, '2kg'),
(119, 23, 4, '3kg'),
(120, 23, 4, '4kg'),
(121, 23, 4, '5kg'),
(122, 24, 4, '9kg'),
(123, 24, 4, '10kg'),
(124, 25, 4, '12kg藍'),
(125, 25, 4, '24kg綠'),
(126, 25, 4, '28kg橘'),
(127, 25, 4, '32kg紅'),
(128, 26, 4, '11-23kg(黑)'),
(129, 26, 4, '23-34kg(紫)'),
(130, 26, 4, '45-54kg(綠)'),
(131, 26, 4, '57-79kg(藍)'),
(132, 27, 1, '率性綠'),
(133, 27, 1, '美力粉'),
(134, 28, 1, '黃色'),
(135, 28, 1, '藍色'),
(136, 29, 1, '燕麥色'),
(137, 30, 1, '時尚藍2入'),
(138, 30, 1, '湖水綠2入'),
(139, 30, 1, '蜜桃紅2入'),
(140, 30, 1, '深海藍2入'),
(141, 31, 5, '雙倍巧克力(5磅)'),
(142, 31, 5, '法式香草(5磅)'),
(143, 32, 5, '香草冰淇淋(10磅/袋)'),
(144, 32, 5, '香草冰淇淋(10磅/袋)'),
(145, 33, 3, '600公克/罐'),
(146, 33, 3, '1200公克/罐'),
(147, 34, 3, '4種口味綜合組'),
(148, 35, 5, '黑巧可可(單入/包)'),
(149, 36, 5, '1kg/袋'),
(150, 37, 5, '1kg/袋'),
(151, 38, 5, '巧克力(18/片)'),
(152, 39, 5, '無麩質大燕麥片'),
(153, 39, 5, '無麩質野莓麥片'),
(154, 39, 3, '1入'),
(155, 39, 3, '4入');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product_type_value`
--
ALTER TABLE `product_type_value`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_type_value`
--
ALTER TABLE `product_type_value`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
