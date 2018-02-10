<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package bristles
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">

	<header id="masthead" class="site-header" role="banner">
		<div class="container">
			<div class="row">
				<div class="site-branding">
					<?php if ( function_exists( 'the_custom_logo' ) ): ?>
						<?php the_custom_logo(); ?>
					<?php else: ?>
						<h1><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php endif; ?>
				</div>
				<nav id="site-navigation" class="main-navigation" role="navigation">

				</nav>
			</div>
		</div>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
