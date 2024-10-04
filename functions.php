<?php
$GLOBALS['start_time'] = microtime(true);

/**
 * Dev-WP Dev Child theme functions
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Dev-WP-Dev-Child
 */

/**
 * Overrides the pluggable function from the parent theme for loading the Google font
 * dev_wp_google_font_head
 *
 * @return void
 */
/*
function dev_wp_google_font_head(){
	$google_font_url = get_field('google_font_url' , 'option');

	if ($google_font_url){
		echo '<!-- Google Fonts -->
		<link rel="profile" href="https://gmpg.org/xfn/11">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="' . $google_font_url . '" rel="stylesheet">
		<style type="text/css">
			body{
				font-family:' . dev_wp_get_google_font_name() . ';
			}
		</style>';
	}
}
*/
/**
 * Overrides the pluggable function from the parent theme for loading the logo for the login page
 *
 * @return void
 */
/*
function dev_wp_login_logo() { ?>
	<style type="text/css" >
		.login h1 a {
			background:url(<?php echo get_stylesheet_directory_uri(); ?>/images/dev-wp-website-management-area-logo.png)!important;
		}
	</style>
	
	<?php
}
*/



// Ovveriding pluggable function


//===========================  Usefull Functions  ===========================

//echo "Execution time before child functions " . number_format((microtime(true) - $start_time), 4) . " seconds";


// Add Custom Widgets
function dev_wp_child_widgets_init()
{

	register_sidebar(array(
		'name'          => 'Email Sign-Up',
		'id'            => 'dev_wp_email_signup',
		'before_widget' => '<div class="footer_widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h5 class="">',
		'after_title'   => '</h5>',
	));
}
add_action('widgets_init', 'dev_wp_child_widgets_init');

// Filter the button shortcode
function dev_wp_button($a, $atts)
{
	$a = shortcode_atts(array(
		'background_color' => 'var(--color1)',
		'accent_color' => 'var(--color5)',
		'target' => '_self',
		'text' => 'Contact Us',
		'url' => '#devwp-Contact',
		'icon' => 'entypo:triangle-right',
		'classes' => '',
	), $atts);

	return $a;
}

//add_filter( 'dev_wp_button_sc_input' , 'dev_wp_button', 10, 2 );

// Override the required lightness for button text color to switch light to dark
function dev_wp_child_button_text_threshold()
{

	$new_threshold = 130;

	return $new_threshold;
}

//add_filter( 'dev_wp_button_text_threshold', 'dev_wp_child_button_text_threshold' );


// Example of fltering the list of sidebars before they are looped through to register
function dev_wp_remove_sidebar_types($merged_post_types)
{
	// (maybe) modify $string.
	$further_removed_post_types = array(
		''
	);

	$filtered_post_types = array_diff($merged_post_types, $further_removed_post_types);
	return $filtered_post_types;
}
//add_filter('dev_wp_filter_sidebars', 'dev_wp_remove_sidebar_types', 10);

function dev_wp_template_variables_override($template_variables)
{

	global $post;

	if (is_category('Test')) {
		return $template_variables;
	}

	$template_variables['title_atts'] 	= 	array(
		'level' 							=> 	4,
		'heading_size' 						=> 	3,
		'classes' 							=> 	'text-left',
	);

	// Sets the Titles HTML based on the block field values & defaults above
	$template_variables['titles'] = dev_wp_get_titles(null, $post, $template_variables['title_atts']);

	return $template_variables;
}
// add_filter( 'dev_wp_filter_template_variables', 'dev_wp_template_variables_override', 100 );



function acf_load_color_field_choices($field)
{

	// reset choices
	$field['choices'] = array();

	// loop through array and add to field 'choices'
	$field['choices']['automatic'] = '<div class="d-inline-flex align-items-center"><span style="display:inline-block; height:20px; width: 20px; background: #ffffff; border: solid 2px #000; border-radius: 5px;"></span></div>';

	$colors = array();

	for ($i = 1; $i <= DEV_WP__COLORS_ALLOWED; $i++) {
		$colors[] = 'color' . $i;
	}

	foreach ($colors as $color) {
		$field['choices'][$color] = '<div class="d-inline-flex align-items-center"><span style="display:inline-block; height:20px; width: 20px; background: var(--' . $color . '); border: solid 1px #ccc; border-radius: 5px;"></span></div>';
	}



	// return the field
	return $field;
}
add_filter('acf/load_field/key=field_62e3cb7a72bb0', 'acf_load_color_field_choices');


function dev_wp_inv_register_additional_color_fields()
{


	$locations = array(
		'group_60a843eeef1ec',
	);

	foreach ($locations as $location) {

		$field_index = 11;

		while ($field_index <= DEV_WP__COLORS_ALLOWED) :

			acf_add_local_field(
				array(
					'parent' => $location,
					'key' => 'field_629f53a84hd' . $field_index,
					'label' => 'Theme Color ' . $field_index,
					'name' => 'color_' . $field_index,
					'type' => 'color_picker',
					'instructions' => 'Theme Color ' . $field_index,
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'default_value' => '#ffffff',
				),
			);

			$field_index++;

		endwhile;
	}
}
add_action('acf/init', 'dev_wp_inv_register_additional_color_fields', 100);

// Add a filter to the search results to include pages
function dev_wp_child_search_filter($query)
{

	if ($query->is_search && !is_admin()) {
		$query->set('post_type', ['page', 'post']);
	}

	return $query;
}
//add_filter('pre_get_posts', 'dev_wp_child_search_filter', 100);

// Custom filter function to ensure empty button link
function dev_wp_filter_button_atts($a, $atts)
{
	// Check if URL is empty, if so, set it to empty
	$a['icon'] = '';
	return $a;
}
//
//add_filter('dev_wp_button_sc_input', 'dev_wp_filter_button_atts', 10, 2);

// Add message to contact form
function dev_wp_append_contact_form_message($block, $loop_counter, $args)
{
	echo '<p class="mt-5">Looking for support? Please use our <a href="#" class="text-primary">support form <span class="iconify" data-icon="bi:arrow-up-right-square" style="font-size: 1em; margin-top: -0.2em; margin-left: 0.125em;"></span></a></p>';
}

// Hook into the 'dev_wp_do_action' action
//add_action('after_contact_form_contact_info', 'dev_wp_append_contact_form_message', 10, 3);


//******************************** 2024 Development ********************************//

// Modify theme options that dont have an ACF field setting like this:
/*add_filter('dev_wp_theme_options', function ($theme_options) {
	// Modify the theme options here
	//$theme_options['theme_options']['header']['template'] = 'Filter Modified Value';
	return $theme_options;
});*/
function dev_wp_after_section()
{
	global $start_time;
	echo "<span class=\"debug d-none\">Execution time after section: " . number_format((microtime(true) - $start_time), 4) . " seconds</span><br><br>";
}
//add_action('after_section', 'dev_wp_after_section', 10, 1);
