<?php
/**
 * @file
 * The primary PHP file for this theme.
 */


function raja_views_pre_view(&$view) {
    if ($view->name == 'warranty_api' && $view->current_display == 'services_2') {




            $filters = $view->display_handler->get_option('filters');
            $_SESSION['filters'] = $filters;
//            foreach ($exposed_filters as $key => $valor) {
//                $filters[$key]['value'] = $valor;
//                $view->display_handler->set_option('filters', $filters);
//                $view->display_handler->override_option('filters', $filters);
//            }


    }
}






































