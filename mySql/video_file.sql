-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 20, 2021 at 07:47 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mfee17_4_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `video_file`
--

CREATE TABLE `video_file` (
  `id` int(6) UNSIGNED NOT NULL,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `filePath` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` int(6) UNSIGNED NOT NULL,
  `duration` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `upload_date` datetime NOT NULL DEFAULT current_timestamp(),
  `views` int(6) UNSIGNED NOT NULL DEFAULT 0,
  `likes` int(6) UNSIGNED NOT NULL DEFAULT 0,
  `favorite` int(6) UNSIGNED NOT NULL DEFAULT 0,
  `valid` tinyint(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `video_file`
--

INSERT INTO `video_file` (`id`, `title`, `filePath`, `description`, `category`, `duration`, `upload_date`, `views`, `likes`, `favorite`, `valid`) VALUES
(1, '一首歌時間瘦身 - 4 分鐘 TABATA	', 'uploads/videos/60e7109b7f92e.mp4', 'Tabata 4 Minute Workout Special for Beginner &amp; Ladies\n1. Squat \n2. Kneeling Push up \n3. Dynamic Lunges \n4. High Knee \n5. Spider Crawl', 3, '04:19', '2021-07-08 22:50:03', 1305, 0, 0, 1),
(2, '4 分鐘初學者 TABATA', 'uploads/videos/60e713099a985.mp4', '運動 20 秒\n休息 10 秒\n總共 8 回', 3, '04:06', '2021-07-08 23:00:25', 1698, 0, 0, 1),
(3, '居家4分鐘爆汗燃脂 TABATA每天4組急速瘦身 - TABATA Home Workout', 'uploads/videos/60e715767fb05.mp4', '大家疫情在家辛苦囉\n嗑冰棒吃餅乾之餘\n每天也可以花幾分鐘運動唷', 3, '04:02', '2021-07-08 23:10:46', 2481, 0, 0, 1),
(4, '初階tabata訓練 四分鐘 一首歌的時間爆汗', 'uploads/videos/60e7184636558.mp4', '四分鐘TABATA，短時間內高效率運動，\r\n跟著我們一起爆汗燃脂！', 3, '03:58', '2021-07-08 23:22:46', 1957, 0, 0, 1),
(5, '6分鐘 超嗨拳擊有氧甩油塑身操', 'uploads/videos/60e71aa1186d6.mp4', '你是不是在休假期間天天享受美食下午茶，因而吃太多、動太少，不知不覺就整個人胖了一圈，正苦惱著如何雕塑全身吶？！\r\n快跟著adidas #adigirls美力訓練營教練Shelly一起打拳甩油燃燒脂肪吧！ ', 1, '06:11', '2021-07-08 23:32:49', 2874, 0, 0, 1),
(6, '5分鐘燃脂 - 徒手有氧運動', 'uploads/videos/60e71dd7e7163.mp4', '簡短而有效率的有氧運動！\r\n大家一起來燃燒脂肪吧！', 1, '05:12', '2021-07-08 23:46:31', 2143, 0, 0, 1),
(7, '居家防疫 | 10分鐘高強度居家運動 - 燃燒脂肪 有氧+無氧', 'uploads/videos/60e71fb866373.mp4', '這個HIIT超燃脂影片會鍛鍊到全身上下\r\n裡面的動作包含了有氧運動以及自重重量訓練\r\n每天跟著跳一次可以燃燒脂肪、提升新陳代謝\r\n建議大家在家裡運動還是穿著運動鞋\r\n這樣在跑跑跳跳時比較安全 腳的負擔也比較小', 1, '10:20', '2021-07-08 23:54:32', 1897, 0, 0, 1),
(8, '10 分鐘腹肌訓練【中級版】10 Min Abs workout', 'uploads/videos/60e720bf814b8.mp4', '分享给大家 - 【10分鐘的集中核心訓練】\n即使嚴禁在家，每天被美食誘惑圍繞著，依然不阻礙我們想要腹肌的心！\n一起鞏固核心力量，完成這 15 個訓練動作吧～\n祝大家健身愉快！', 4, '10:42', '2021-07-08 23:58:55', 2386, 0, 0, 1),
(9, '練腹部很無感？｜三個基礎動作喚醒核心｜新手的你必看', 'uploads/videos/60ecf9f884bf8.mp4', '⭐基礎核心訓練：\r\n\r\n棒式30秒\r\n死蟲式30秒\r\n彈力繩核心訓練30秒\r\n\r\n►做完三個動作為一組，做3~4組。', 4, '12:01', '2021-07-13 10:27:04', 2209, 0, 0, 1),
(10, '7 分鐘居家徒手腹肌訓練【初級版】無裝備', 'uploads/videos/60ed011b51f6c.mp4', '分享給大家 - 【7分鐘的站立式核心訓練】\n分別有：第一組的 5 秒間隔休息時間，和第二組的不間斷無休息。\n即使被疫情阻礙了健身進度，在家依然可以實現 擁有腹肌的心！\n一起鞏固核心力量，完成這 12 個訓練動作吧～\n\n祝大家健身愉快！', 4, '07:17', '2021-07-13 10:57:31', 3409, 0, 0, 1),
(11, '【每天一遍】10分鐘脂肪消減訓練(男女通用)', 'uploads/videos/60ed042d8d861.mp4', '快速消除脂肪\r\n基礎核心訓練\r\n', 4, '11:45', '2021-07-13 11:10:37', 2148, 0, 0, 1),
(12, '新手不挫折之10分鐘居家腹肌運動', 'uploads/videos/60ed07f0743d0.mp4', '哈囉又是我～為了各位新手出的跟著做腹肌運動來了\r\n提升信心同時，也比較能循序漸進地加強核心力量喔\r\n建議大家可以先看這支和物理治療師合作的影片，會更清楚知道核心的發力技巧喔\r\n新手如何正確練核心腹肌？物理治療師教你改善脖子痠、下背痛問題 | 初學者的降階動作教學 ', 4, '11:09', '2021-07-13 11:26:40', 1468, 0, 0, 1),
(13, '新手如何正確練核心腹肌？- 物理治療師教你改善脖子痠、下背痛問題', 'uploads/videos/60ed0991be3df.mp4', '最近有越來越多女孩開始跟著May Fit居家訓練，許多人在堅持鍛鍊下來獲得好成果，\r\n但也同時收到關於不知如何讓核心正確發力的問題，以及腰酸、頸痛等狀況出現。\r\n為了給各位專業的解答，這次影片特別邀情好友兼物理治療師NINI擔任嘉賓，\r\n講解核心腹肌的發力技巧，以及適合初學者的降階動作！', 4, '10:54', '2021-07-13 11:33:37', 1377, 0, 0, 1),
(14, '[鄭多燕瘦身有氧] 10分鐘甩肉操 瘦手臂瘦腰腹瘦大腿小腿(全身減重篇)', 'uploads/videos/60f04bce05c4e.mp4', '運動時間：10分鐘\n等級評估：基礎運動\n燃脂部位：瘦全身\n適用族群：蘋果型全身胖體態、軟趴趴肉肉族、上班族', 1, '10:32', '2021-07-13 11:49:18', 5046, 0, 0, 0),
(15, '在家10分鐘燃脂運動『不用器材』｜10分鐘有氧運動', 'uploads/videos/60ed16a9554a1.mp4', '準備好一起有氧了嗎？\r\n每個動作30秒，累狗！', 1, '11:02', '2021-07-13 12:29:29', 2943, 0, 0, 1),
(16, '6 個最優的肩膀訓練動作 造出肌肥大三角肌 | 科學研究證實', 'uploads/videos/60f2628dabc26.mp4', '6 個最優的肩膀訓練動作 造出肌肥大三角肌 | 科學研究證實\n這個影片，Sebastian 教你有效率的訓練每個三角肌的部位來幫助肌肉生長。影片中也講解三角肌的結構及研究論文的分享。', 2, '14:52', '2021-07-17 12:54:37', 2468, 0, 0, 1),
(17, '重訓肩膀拉傷，半年都不會好！？【行動整聊室】', 'uploads/videos/60f26337bcd8a.mp4', '重訓拉傷肩膀是很常見的事，有許多人做大重量的人，都會因此卡關，甚至半年一年都沒辦法有所進步，因此這次的影片就來看一下，這樣的問題該怎麼處理，以及為什麼會發生這樣的事情吧！  ', 2, '08:34', '2021-07-17 12:57:27', 1098, 0, 0, 1),
(18, '重訓健身，一週要練幾天才有效？｜How many days a week should I workout?｜新手系列', 'uploads/videos/60f26459af386.mp4', '【胸肌】\n【背部】\n【股四頭】\n【側三角】\n【二頭肌】\n【三頭肌】\n【腹肌】', 2, '03:10', '2021-07-17 13:02:17', 6038, 0, 0, 1),
(19, '舉的輕也能練壯嗎？輕重量高次數訓練的效果', 'uploads/videos/60f2651e9e987.mp4', '深入淺出講解搭配自身經驗分享，希望能為大家解惑。', 2, '05:09', '2021-07-17 13:05:34', 3950, 0, 0, 1),
(20, '10分鐘 ｜ 啞鈴練全身', 'uploads/videos/60f2722874f3a.mp4', '今天我們的訓練加入啞鈴\r\n如果家中閒置很久\r\n要重不重要輕不輕的啞鈴\r\n現在派上用場了\r\n平時都做徒手訓練的朋友藉由啞鈴來增加阻力\r\n也能做到更多徒手做不到的上肢訓練\r\n跟著影片利用啞鈴從頭練到腳', 2, '11:02', '2021-07-17 14:01:12', 2109, 0, 0, 1),
(21, '重訓如何挑選適合的重量？｜How to pick the right weight？', 'uploads/videos/60f274874be33.mp4', '重訓到底要練多重才有效？要怎麼挑選自己的重量  重訓可以簡單分成所謂的： 1.力量訓練：1~6rm的重量 2.肌肥大訓練：8~12rm的重量 3.肌耐力訓練：低於15rm的重量  你應該針對自己的需求，下去分配這幾種訓練所佔的比重 而這幾種方法是互相輔助的，應該妥善分配這些訓練在自己的菜單中', 2, '03:41', '2021-07-17 14:11:19', 3810, 0, 0, 1),
(22, '重量訓練可以燃燒多少熱量？ | 這個數字會讓你感到驚訝！', 'uploads/videos/60f276020fd2a.mp4', '我們都想知道重量訓練會燃燒多少熱量。在影片中，我和Yalan會根據有關這個主題的最新研究為你們提供答案。', 2, '06:12', '2021-07-17 14:17:38', 2943, 0, 0, 1),
(23, '重訓完！可以吃炸雞補充蛋白質嗎？', 'uploads/videos/60f29955b2a1b.mp4', '重訓完想吃炸雞嗎？\r\n快來看看我的分析吧！\r\n\r\n影片中的照片影片，都為示意，與內容無關～', 5, '03:34', '2021-07-17 16:48:21', 1894, 0, 0, 1),
(25, '吃出六塊肌! (腹肌飲食) - 健身飲食', 'uploads/videos/60f3077ba6135.mp4', '這是我們的 &quot;第一個&quot; YouTube健身飲食影片。我們會陸陸續續拍攝一連串我們所知道的健身飲食知識，毫不保留無私的跟大家分享。這第一個影片是先介紹最基礎的一些概念，然後簡單說明營養素以及分享我們自己採用，有效率的營養素比例。也在影片中示範我們日常生活中的營養素是從那些食材來攝取的。', 5, '07:45', '2021-07-18 00:38:19', 5783, 0, 0, 1),
(26, '大H | IFBB PRO 外食族增肌寶典 正確增肌不增脂', 'uploads/videos/60f3097dd998d.mp4', '增肌外食菜單大公開! 提供完整增肌飲食內容，教大家如何正確選擇對增肌有益的食物。\n便利超商、朋友聚餐、自助餐，吃對食物，就能確實幫助增肌 ; 如何控制飲食份量，不讓增肌變增脂，影片中將有詳細的說明，敘述的內容，是以我近年非賽季中的切身經驗，分享給大家。這部影片還有神秘「健人」友情客串，風趣幽默的他，帶給我們超多歡樂!', 5, '14:30', '2021-07-18 00:46:53', 2057, 0, 0, 1),
(27, '想要變壯？攝取蛋白質的三個原則', 'uploads/videos/60f30a71a6d20.mp4', '講解蛋白質攝取原則，大家可以留言一起討論！', 5, '03:24', '2021-07-18 00:50:57', 1745, 0, 0, 1),
(28, '如何25分鐘內完成一週減脂便當?', 'uploads/videos/60f4ef04788c0.mp4', '有在運動及飲食控制的人，很容易因為沒時間準備或是不知道怎麼抓飲食份量而使得減脂進度變慢，最好的方式就是事先準備囉! 這個影片會教你如何在25分鐘內完成4道菜、怎麼分裝便當，讓最麻煩的飲食控制變得簡單又方便!', 5, '20:16', '2021-07-19 11:18:28', 3325, 0, 0, 1),
(29, '[鄭多燕瘦身有氧] 10分鐘甩肉操 瘦手臂瘦腰腹瘦大腿小腿(全身減重篇)', 'uploads/videos/60f4f01248e3a.mp4', '運動時間：10分鐘\r\n等級評估：基礎運動\r\n燃脂部位：瘦全身\r\n適用族群：蘋果型全身胖體態、軟趴趴肉肉族、上班族', 1, '10:31', '2021-07-19 11:22:58', 8987, 0, 0, 1),
(30, '一週戒糖挑戰！回歸健身飲食，除了吃水煮餐，你還有更好的選擇?！｜泰森Taisen', 'uploads/videos/60f4fc8fa956e.mp4', '#一週戒糖挑戰 ＃回歸健身飲食 #怎能只吃水煮餐\n為了讓大家知道過量攝取糖份，所對身體造成的傷害，因此執行這項挑戰！', 5, '10:25', '2021-07-19 12:16:15', 1204, 0, 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `video_file`
--
ALTER TABLE `video_file`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `video_file`
--
ALTER TABLE `video_file`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
