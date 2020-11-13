-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 13, 2020 at 07:17 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `offbeat`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_title` varchar(255) NOT NULL,
  `category_cover` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_title`, `category_cover`) VALUES
(1, 'International', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAlCAYAAABReInxAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHKADAAQAAAABAAAAJQAAAADrRAxvAAACKklEQVRYCd2XwU4CMRCGZ1YhJmrcuxj3EXgEfQJ4A/Ei8aQcwHjTo1zkKF6Mb8Aj4BOIb4ARE29C9KCs2TqzpBsDw7buyh7sYVum0/9r6Uy3i5vN6yKCukGAIvxxUQA9QOgM6tVzLY2FZvt+ETAN4JrB77n87rC2P3QWDWMgM9b8zzNuO/zIoqCCEnMyAwKily2QaVSWJ5XlU8EteXaUEwwxcFxql2mD9ixHh252QAUjgpQHjcPulHiH0qrlKNUl8MZUn/jTdg8rg/oMLBR8bhz0eDKiumA0ApVSD08n1Y4wNjLxZCjX7iJDTMMIpCyKhUXaCrpRO6ZhAYwZnaDLCKRTwrPSRcVRayxGIEVfyb28MYrpk8RENAMB3HX/8zJOqNC8aumTJM6P++zyELBSuGi7X0FQezk97GtRXvlkMljRNlNtCaRYRSjnlpwyraarRdEf74TvAm2wqK2BWgsBCZK82OxhcnVhZOZA8S8NjynLk0NYBO23KtLelqQ+EThoVHck59/YtprtV/KfyV8RSJF4RJeB3m8AP33pwPckGPuIQIrEVnjXYo8EhVJobsk8aP4/UNxDuiqPFNI1PXnxaBu3peEi8C2f9/haLg2wsYWH+njcly5W4h6u+r5nIzzPZ+Xjw5Vg7C+u0AF1T4k7Ty+VXVxhKkXD4OyAFIg8l+yA9IkQAunN8Gj4F1J3M4Mi/zgEAgYVzrvUqpIA69IHEH39FtOkmSRtbfsG8lGMr7ZyW/8AAAAASUVORK5CYII='),
(2, 'Hiking', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAHAAAAAANj1rQAAACf0lEQVRYCc1WvW4UMRCe8f2kIEEuI10ihTcgHWWQaBG8QUJDRJVLEVJmqdCFIkd1HM2Jd6BEIm8Ab5CgJP2Ko2EDZ2bM7sKux5u9u90kbuz5sz99Ho8HYYrRORxsKYMHgLgGBvpn+9u7U4TP5NooG7X8erDWVOozgdM2BuHB3UeP8funj8dl95jFT5UNaikV5H0RYUcfjf4CzhsrkksBZPYAYVM4U9+Joi1BX5mqFECJvQSBArOTrOuYrwRorxDhifdwejD8eLz2OQ1XAlyMoi6dUZhn9mXPCcQXXgiQ2eOH4AtO9cTiam/4NJUrXBQCjB9AIXsJFoP15CImB0jzau/diS3KklHQGZw8PN97cSyYgBg+okrA6RIahP753vYryS+v8zJoE5+uLh9QKPMvI4yV3jCIwbFVo4GgbEp4Ac6S+Ai40Tl8f/9/jFxDKY9d4AijMkVeBDgTezEqZQxfYzqaDRylQnahl6Kon1W5kgiQmJB+DTda0tCPY38esnV6wy6zKrlZHfmuvBn47eTkPBIOQENNwTzDwIdxu91duoxOaBtduJUxp+P2wnq4+yyU/FwGPYkuBXt1xAwVeL7aYnC8AT3ExcufAS+lkWGQE5z+1i+SY926CeD6xcvnX/PnZBjMJ3jeuU4ZwTDjzkgbVk7shvK+OCewagVd5bLUAKcMFrVUVYPx7cf/flIBEh8LMG6pNhPlDc46XzctwLilukFc/462vxHVz0SDzF6pepVEXM8cjlvte1wbVZmG9HowZU7RcR0FnLalymxTs8C1UU3T79WMx9ke8bdWBsxbx3ILFAbgGze/zR+thYDuO6S2YeMW4LIQqKE9/TWZBCz8AfkWpT9bF5cvAAAAAElFTkSuQmCC'),
(3, 'Camping', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAkCAYAAADsHujfAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIqADAAQAAAABAAAAJAAAAACu8nbOAAADrklEQVRYCaVXTUwTURCeeS0KGA4kmjR0azxx8mQ4etEYNdGLGNGDekAEBEzUWH4qmp6Elog3aCV48uTFkyHRRKtXbx4MJhqjQoJB4UCi2G47zrYsdrfv7b4tTZr33sw3876dNztvFmEHPyOVTSNC3HJBSJeW4v1P6nWH9RrGUtmHgHCj2p4QO5fivc+qZbpzoQusxkXuP97H64FqWXleokkgquvh6iISDueHORq73ET4mNqNdPaMW66zDkxkb2q+hROiT+WcwzGm0nnJAxPZjeZ1fvIWpVPEjmgqe0SpVyiCEUk+3YXkTFCZXwQakcm9ZIGIxJrWejgaVqJ6/hDxRGxq9qAnyKXUJ5JMWthyzXD5kC9L4o5cIZdqE4k1R84D4gG5m1opAXVFJma18dpEeKtE7XZqCR+PaAiJYTXCqdEqPkY6cxIBF5ymGiuCfKHYYKwkulf90JoRwVE/R1I9F72GcMFxDUhxLPSNSCyV6eDceKdy4Ccngo1NCEd/jlzZ8ML6RoQAA2W/ezOr+DVhQVmJbbxnRKIPHrVjkRYZ5ImznalGjsrq0p9WA5JdeRXGMyKiWBrbKQlrY6sIGs3rl1UkLLmSSCw138ZPctHLOJCOuBh6tAhKIoDmba4F4UCbeYA5Ku3G1FynCiIlsn9iphUIrqmMquUEsFa99przZagsilIiFBKDnJ6NXk63dQTP+Qg/ba+9J4eiU3NHZZAaIsb0dBNH45YMLJPxU77m1pn/ej9BJWmLUEMEzOYeTvNWPbcAeRHK8flrE2G/x2UtgpNIMhlG0i/nnB9ff8SvftmEYhAiHEAx7n5QBxFjT+QC50abG6RaV44FYHV4cIWIPqpwbjljz7lbBAcRKOFdt5HXugT/j4QLn3ZUyi2CQEeubBOJTmZPWe+618ZuXR6KL2xZifQTtmKD3VvfR+XlNhGBEPSq/2wdiU0kRPTSnmuNVosQyt+0sWUilaseDttCnZET1XEU38YG1jkLP+jY2hi+2YfK30ksqEQE4Z6t1B4lryw7dpDz88Wp0NIIZr+FE9ZVzw5O+xm59X/JfOWW8T0biMiWfRz4e0kIkxJBr3o+lsXq/LAJkZnP2XPdkaNSbhEEt/1ndY1sHNcBSTQAlhNDv5jkexunPRJ0Ci5gv7UNbCBizp7WjkFf43L7VxBc0udqnflIzII0IpYV+8v5WNeouV/KhL+P9I3H0plNTthjNQi5YNk6ArmKX+CG0Fswi29Ueqecivy+zCyN9i78A1km+LHMVQgXAAAAAElFTkSuQmCC'),
(4, 'Cycling', 'data:image/png;base64,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'),
(5, 'Weekend Trip', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIaADAAQAAAABAAAAIQAAAAA1iKI6AAACdUlEQVRYCe1XwU7bQBCd2Yaqh0r4WAkj8QfkDzB/QP/AuTTNLRxI1Rs9VXEPHEO4JP0CyheQfkHzCVQEqUeQekA08XTGZonjbGI72VocOlK0u7O7b55ndmc2CAZx291zRDjQUwQw/L3xcv/2sHardVntm8+dncoLdY4A1ela6l+33tem47in0gr3S8dLEpB5AXr98NBMr102rijlzxKIkHzBT++bI5FeUMaYycayFZxVEcK9mD36Wq9bAhoA4kCPM1siDwG9+XXUl/COJ3Tx62PjSuYjEtvt7gn3Crl7Hry4hhCOR0f1T7gVdHwFqlccwtIOgrcKQfmW4FaCYW80mQTsrbTb0ia2v1tJY/Gh+T5q1b203tbYDbqD1Ic7z+KK/iehQzx3JvTEqm2c9KiHRA6nocPrD/VvWVhWwyEEFNAlH7wqZ9cdToA956THZJaLNRKaAJtLGnVe3d8nx0Y2uUlI9RNDJpQFBAAIvur6YNqndblIuO3TIZK6ZFf/iOqM3s3tMgJ8HvzE0oXdTBLx+wJ3nxA4zW4Hp1GtsUFAcDNvx3gMVxsK7viQbT4RAfT59eUgkMe62ZhzCPJ6QONlekJiGmLY1Bt0+/j6WpuA4GWSkEU3rUY/hLAm/YWyggc0Vi4SsngpkTUICHZuEguJrEmgMAlNhDDc5yRwERJIWvZFv45k3g4T+OioMWC9/KxIoXBYsWgAeRYkTOHYdIOzf/jupETSi91S4SIzkw2jMix/dEoSftP+VIDlGTR9F6f+oQpBHZsmS9FxFP5MqKluWu+Gcu/FLaUYfjQi9kiFB1Kb+AhMRUoz4mS2KE2nrfWkMicfO38BRizUnQ/ktFgAAAAASUVORK5CYII='),
(6, 'Sailing', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAJQAAAABQ/1bEAAACkklEQVRYCe1YzVITQRDungTxEMs9UpVQrm8Qn8D4BryBcEE4AQfjMblZiQdyi/FCfAN9AuMTAM8g3GMVBwm4bXdSsyGpjbvzswtWuVXU/OzM199H93RPFiHHp9rtbytQJwQ0umjuvcrDlMoDVGMqUj3pI2Cj1hm09bzPNlcBzPypJosIB8HxSaDHvtp8BSyyDCo31+3FKfdRkQIklA423vdDd9pzhEIFiNmyUsdz8+69wgXwWdiqfeg33KnPEAoXMDVL2PqnBUha3ewMtnyIuB8PzNzg5SzcnwDEsNoZHLp6wYuAWvdjj/++ydXBhJBCaLkWN2cBckWQ/C5xLfceQ0JBZTJx8oKTAClKnBYXMkrl9lfdxAuy36W4OQkol9TQhOyqtWtKtVe9S5u3FiDxjgAv0wxkeo/w2ra4WQmQOOd495IGY4GWxc1KwJPJpMeGg9i4h45tcTMWMHU1u9wD5wQIMvaqsQAgPwc3gT3/dDMvbkYCZjkfniUa9zRpWtwyC0jK+Z44L8MYFbfMAnzl/GW2SWOT4pZJgNecn8Q4YS5rccskQH8eSbCT31TG4pYqoNr9VL/7eSSNMVFpHK8h+Bn3bTqRaqRtSxVw2dw9I4DvaUDynojOZb1eS0hD3bdp+aoSY63az2uyPeIJxN9/rb4Xb/dHy2i2d5yr8uOz8dHO3JvLwP/HD+Q/gFKg1krY4jgPrTkRjkGlx6vGxwgCPh91PTZu2R7H/ucf7958wVp3cMoDezBj6/42RIAvFBI89wdZLJIiClWE0WGxZv1Yk5QtIaQum/vDCKIdP7BFodDXq0frDbHG4T97JM+zS0YmVVfvLbSl6eHd1jZjATIxzUj8hYAQQr3gIbV8XnsSNnc5/QHrw6bIN0G4BwAAAABJRU5ErkJggg=='),
(7, 'Road Trip', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAgCAYAAACVU7GwAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAJaADAAQAAAABAAAAIAAAAAB74KxFAAADRUlEQVRYCcVYvW4TQRCeWScSEiCuRMIRfoR7A1zQovgNkjQ4qQgFtqjiVChOEagS08R0dASJksLpKM0bGMWRKBMhpEgJO8ycs769vb1LfBcl2+zs/Hz73e7O7NoIV7SFrV6DEDYQILzCNd9MNNKAneN281O+IwDPld2EEHt8yfaY3UIEm+N2s5MXqfKMTGg/117AiLzqj9/t1vJCM0lFqwQQ5AUXtVUqUM+LncsxNmwbAX0Yt1bXbd115SdbvXWFsGP8FaBg983Y7TNXCoCe2c4EKhPE9vPJ/7Q+SOpxMdjZD5K6eOQl9aT7MQTE2tSN4PS49XI4Hc8o/H67NiKin3bY/fMzWS1v85JC0MuOt/OljvUaQwLs226XW2irprKfFMHi1GMilCbl2cLE8bDnS5Hybd1Ru1maVLSFAL+syYPLDLdUEzFFCojqjldpQjEeuViN2BZLKVJc3JZiM4BGPbDHZeRUBmPqmETwCVJSafneCe2J/87fc7/ONs8kSwaTs4XV7d26CzK9++QsIdEGr5S9pCdcNIduUJkxAspHBwaD8QeAtDl+szYwuohUtbv3ip3fG+Xd9NQ/aq2uyNwVWT4E9fluiNizYvjw+YvTP9+//VBAqmOb7lLm+3FD5uceUkWMD+OhBr0ibx/gK+bGiDKWXOyCzXfrVw9uIHdi6pUgd9S4vVo3AZyR/Xmlhvy2emR0RXtSumEd6P5Cd++A35mJ2+PBxVmYKAmTyZAd4xZVYoRhrCkmSSmwCE1AKHkfGuQ0KaTAGK2+9CrxMXlq4UWiBqi5OhmnSHFpWLILWnW7V/5Hw+XMvF37hoTURXOwjU56osoJVru9ke8reLmHXEyDxLvKji4uc0EGmTP0QRy1mqiQYOAzRkGINZ+tpC7IIsRkDwVbnWvdudG0L8o4Khe4HpGS7GJioWFZFLNMnJQhjVg3T25eybhVt3od+V0Wa2JJE7xGpQuVBtJKDvVOjBZLvl9JqeIZuyclIZSqM0mXzBFnM6dVKtEn/oQnbmCGp+t2u+NbISW1Z5bPSpJSGU9fzoyLCxjNAmz7el6cUzOhTuEmDrp4Rn/9OIWNEA9MZkzRZhTkqT2n1LIdJoSOW2t9Wyfyf93+FdG+/6m8AAAAAElFTkSuQmCC');

-- --------------------------------------------------------

--
-- Table structure for table `moments`
--

CREATE TABLE `moments` (
  `moment_id` int(11) NOT NULL,
  `moment_date` datetime NOT NULL,
  `moment_description` text NOT NULL,
  `moment_latitude` varchar(255) NOT NULL,
  `moment_longitude` varchar(255) NOT NULL,
  `moment_location_name` text NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `moments`
--

INSERT INTO `moments` (`moment_id`, `moment_date`, `moment_description`, `moment_latitude`, `moment_longitude`, `moment_location_name`, `post_id`) VALUES
(1, '2020-11-06 00:00:00', 'Moment 1', '1', '1', 'Canada', 1),
(2, '2020-11-06 00:00:00', 'Moment 2', '1', '1', 'Canada', 1);

-- --------------------------------------------------------

--
-- Table structure for table `moments_pictures`
--

CREATE TABLE `moments_pictures` (
  `moment_picture_id` int(11) NOT NULL,
  `moment_picture_file_name` varchar(255) NOT NULL,
  `moment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `post_title` varchar(255) NOT NULL,
  `post_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `post_visibility` tinyint(1) DEFAULT '0',
  `category_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `post_title`, `post_created_at`, `post_visibility`, `category_id`, `user_id`) VALUES
(1, 'Post 1', '2020-11-07 04:41:35', 1, 1, 1),
(2, 'Test', '2020-11-13 06:58:26', 0, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_middle_name` varchar(255) DEFAULT NULL,
  `user_last_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_allow` tinyint(1) NOT NULL DEFAULT '1',
  `user_last_login` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_middle_name`, `user_last_name`, `user_email`, `user_created_at`, `user_allow`, `user_last_login`) VALUES
(1, 'Leonart', NULL, NULL, 'leonartgutz@gmail.com', '2020-11-06 10:56:49', 1, '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `moments`
--
ALTER TABLE `moments`
  ADD PRIMARY KEY (`moment_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `moments_pictures`
--
ALTER TABLE `moments_pictures`
  ADD PRIMARY KEY (`moment_picture_id`),
  ADD KEY `moment_id` (`moment_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `moments`
--
ALTER TABLE `moments`
  MODIFY `moment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `moments_pictures`
--
ALTER TABLE `moments_pictures`
  MODIFY `moment_picture_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `moments`
--
ALTER TABLE `moments`
  ADD CONSTRAINT `moments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `moments_pictures`
--
ALTER TABLE `moments_pictures`
  ADD CONSTRAINT `moments_pictures_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moments` (`moment_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;
