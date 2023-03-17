-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Mar-2023 às 04:38
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `outfit-e-commerce`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `category`
--

INSERT INTO `category` (`id`, `name`, `description`, `productId`) VALUES
(2, 'Jeans', 'roupas de tecido jeans', NULL),
(3, 'testeeeee', 'fekfokdolfoorf', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `retailValue` decimal(5,2) NOT NULL,
  `wholesaleValue` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `retailValue`, `wholesaleValue`) VALUES
(2, 'Vestido', 'vestido de malha branca, tamanho P', '70.89', '59.99'),
(4, 'Vestido', 'vestido de malha branca, tamanho P', '99.99', '89.99'),
(5, 'Vestido', 'vestido de malha branca, tamanho P', '99.99', '89.99'),
(6, 'Vestido', 'vestido de malha branca, tamanho P', '99.99', '89.99'),
(7, 'Vestido', 'vestido de malha branca, tamanho P', '99.99', '89.99');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `hash` varchar(300) NOT NULL,
  `salt` varchar(300) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `name`, `hash`, `salt`, `isAdmin`) VALUES
(1, 'admin', 'dkoekfdolfdf', 'sokolosldocs', 0),
(2, 'user', 'dkeofdolofl', 'feoldof,dolf', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`);

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `category`
--
/*ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);
COMMIT; */

CREATE TABLE `product-category`(
  `id` INT PRIMARY KEY NOT NULL,
  `id_product` INT,
  `id_category` INT,
  FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  FOREIGN KEY (`id_category`) REFERENCES `category` (`id`)
);


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
