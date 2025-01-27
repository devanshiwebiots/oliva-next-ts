import { SidebarMenuType } from "@/Types/LayoutTypes";

export const menuList: SidebarMenuType[] = [
  {
    title: '- General',
    menucontent: 'Dashboards,Widgets',
    menu: [
      {
        id: 1,
        title: 'Dashboard',
        icon: 'home',
        badge: true,
        badgeName: "2",
        badgeColor: "light-primary",
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Default',
            type: 'link',
            url: `/dashboard/default`,
          },
          {
            title: 'Ecommerce',
            type: 'link',
            url: `/dashboard/ecommerce`,
          },
        ],
      },
      {
        id: 2,
        title: 'Widgets',
        icon: 'widget',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'General',
            type: 'link',
            url: `/widgets/general`,
          },
          {
            title: 'Chart',
            type: 'link',
            url: `/widgets/chart`,
          },
        ],
      },
    ],
  },
  {
    title: '- app',
    menucontent: 'Ready to use Apps',
    menu: [
      {
        id: 3,
        title: 'Project',
        type: 'sub',
        icon: 'project',
        badge: true,
        badgeName: "New",
        badgeColor: "light-secondary",
        active: false,
        menu: [
          {
            title: 'Project List',
            type: 'link',
            url: `/project/project_list`,
          },
          {
            title: 'Create New',
            type: 'link',
            url: `/project/new_project`,
          },
        ],
      },
      {
        id: 4,
        title: 'File Manager',
        url: `/app/file_manager`,
        icon: 'file',
        type: 'link'
      },
      {
        id: 5,
        title: 'Ecommerce',
        icon: 'ecommerce',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Add Products',
            type: 'link',
            url: `/app/ecommerce/add-products`,
          },
          {
            title: 'Product',
            type: 'link',
            url: `/app/ecommerce/product`,
          },
          {
            title: 'Product Page',
            type: 'link',
            url: `/app/ecommerce/product-page`,
          },
          {
            title: 'Product list',
            type: 'link',
            url: `/app/ecommerce/product-list`,
          },
          {
            title: 'Payment Details',
            type: 'link',
            url: `/app/ecommerce/payment-details`,
          },
          {
            title: 'Order History',
            type: 'link',
            url: `/app/ecommerce/order-history`,
          },
          {
            title: 'Invoices',
            type: 'sub',
            menu: [
              {
                title: 'Invoice-1',
                type: 'link',
                url: `/invoice/invoice-1`,
              },
              {
                title: 'Invoice-2',
                type: 'link',
                url: `/invoice/invoice-2`,
              },
              {
                title: 'Invoice-3',
                type: 'link',
                url: `/invoice/invoice-3`,
              },
              {
                title: 'Invoice-4',
                type: 'link',
                url: `/invoice/invoice-4`,
              },
              {
                title: 'Invoice-5',
                type: 'link',
                url: `/invoice/invoice-5`,
              },
              {
                title: 'Invoice-6',
                type: 'link',
                url: `/app/ecommerce/invoice/invoice-6`,
              },
            ]
          },
          {
            title: 'Cart',
            type: 'link',
            url: `/app/ecommerce/cart`,
          },
          {
            title: 'Wishlist',
            type: 'link',
            url: `/app/ecommerce/wishlist`,
          },
          {
            title: 'Checkout',
            type: 'link',
            url: `/app/ecommerce/checkout`,
          },
          {
            title: 'Pricing',
            type: 'link',
            url: `/app/ecommerce/pricing`,
          },
        ],
      },
      {
        id: 6,
        title: 'Letter Box',
        url: `/email/letter_box`,
        icon: 'email',
        type: 'link',
      },
      {
        id: 7,
        title: 'Chat',
        icon: 'chat',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Private Chat',
            type: 'link',
            url: `/chat/private_chat`,
          },
          {
            title: 'Group chat',
            type: 'link',
            url: `/chat/group_chat`,
          },
        ],
      },
      {
        id: 8,
        title: 'Users',
        icon: 'user',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Users Profile',
            type: 'link',
            url: `/users/user_profile`,
          },
          {
            title: 'Users Edit',
            type: 'link',
            url: `/users/edit_profile`,
          },
          {
            title: 'Users Cards',
            type: 'link',
            url: `/users/user_cards`,
          },
        ],
      },
      {
        id: 9,
        title: 'Bookmarks',
        url: `/app/bookmarks`,
        bookmark: true,
        type: 'link',
        icon: 'bookmark',
      },
      {
        id: 10,
        title: 'Contacts',
        icon: 'contact',
        url: `/app/contacts`,
        type: 'link',
        active: false,
      },
      {
        id: 11,
        title: 'Tasks',
        url: `/app/task`,
        icon: 'task',
        type: 'link',
      },
      {
        id: 12,
        title: 'Calendar',
        url: `/app/calendar`,
        icon: 'calendar',
        type: 'link',
      },
      {
        id: 13,
        title: 'Social App',
        url: `/app/social_app`,
        bookmark: true,
        icon: 'social',
        type: 'link'
      },
      {
        id: 14,
        title: 'To-Do',
        url: `/app/todo`,
        bookmark: true,
        icon: 'to-do',
        type: 'link',
      },
      {
        id: 15,
        title: 'Search Result',
        url: `/app/search_result`,
        icon: 'search',
        type: 'link'
      },
    ],
  },
  {
    title: 'Forms & Table',
    menucontent: 'Ready to use froms & tables',
    menu: [
      {
        id: 16,
        title: 'Forms',
        icon: 'form',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Form Controls',
            type: 'sub',
            menu: [
              {
                title: 'Form Validation',
                type: 'link',
                url: `/forms/form_controls/validation_form`,
              },
              {
                title: 'Base Inputs',
                type: 'link',
                url: `/forms/form_controls/base_input`,
              },
              {
                title: 'Checkbox & Radio',
                type: 'link',
                url: `/forms/form_controls/checkbox_radio`,
              },
              {
                title: 'Input Groups',
                type: 'link',
                url: `/forms/form_controls/input_groups`,
              },
              {
                title: 'Input Mask',
                type: 'link',
                url: `/forms/form_controls/input_mask`,
              },
              {
                title: 'Mega Options',
                type: 'link',
                url: `/forms/form_controls/mega_option`,
              },
            ],
          },
          {
            title: 'Form Widgets',
            type: 'sub',
            menu: [
              {
                title: 'Datepicker',
                type: 'link',
                url: `/forms/form_widget/datepicker`,
              },
              {
                title: 'Touchspin',
                type: 'link',
                url: `/forms/form_widget/touchspin`,
              },
              {
                title: 'Switch',
                type: 'link',
                url: `/forms/form_widget/switch`,
              },
              {
                title: 'Typeahead',
                type: 'link',
                url: `/forms/form_widget/typeahead`,
              },
              {
                title: 'Clipboard',
                type: 'link',
                url: `/forms/form_widget/clipboard`,
              },
            ],
          },
          {
            title: 'Form Layout',
            type: 'sub',
            menu: [
              {
                title: 'Form Wizard 1',
                type: 'link',
                url: `/forms/form_layout/form_wizard_1`,
              },
              {
                title: 'Form Wizard 2',
                type: 'link',
                url: `/forms/form_layout/form_wizard_2`,
              },
              {
                title: 'Two Factor',
                type: 'link',
                url: `/forms/form_layout/two_factor`,
              },
            ],
          },
        ],
      },
      {
        id: 17,
        title: 'Tables',
        icon: 'table',
        type: 'sub',
        menu: [
          {
            title: 'Reactstrap Tables',
            type: "sub",
            menu: [
              {
                title: 'Basic Tables',
                type: "link",
                url: `/table/reactstrap_table/basic_table`,
              },
              {
                title: 'Table Components',
                type: "link",
                url: `/table/reactstrap_table/table_component`,
              },
            ],
          },
          {
            title: 'Data Tables',
            type: "sub",
            menu: [
              {
                title: 'Basic Init',
                type: "link",
                url: `/table/data_table/basic_init`,
              },
              {
                title: 'Advance Init',
                type: "link",
                url: `/table/data_table/advance_init`,
              },
              {
                title: 'API',
                type: "link",
                url: `/table/data_table/api`,
              },
              {
                title: 'Data Sources',
                type: "link",
                url: `/table/data_table/data_sources`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Components',
    menucontent: 'UI Components & Elements',
    menu: [
      {
        id: 18,
        title: 'Ui Kits',
        icon: 'ui-kits',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Typography',
            type: "link",
            url: `/ui_kits/typography`,
          },
          {
            title: 'Avatars',
            type: "link",
            url: `/ui_kits/avatars`,
          },
          {
            title: 'Helper Classes',
            type: "link",
            url: `/ui_kits/helper_classes`,
          },
          {
            title: 'Grid',
            type: "link",
            url: `/ui_kits/grid`,
          },
          {
            title: 'Tag & pills',
            type: "link",
            url: `/ui_kits/tag_pills`,
          },
          {
            title: 'Progress',
            type: "link",
            url: `/ui_kits/progress`,
          },
          {
            title: 'Modal',
            type: "link",
            url: `/ui_kits/modal`,
          },
          {
            title: 'Alert',
            type: "link",
            url: `/ui_kits/alert`,
          },
          {
            title: 'Popover',
            type: "link",
            url: `/ui_kits/popover`,
          },
          {
            title: 'Tooltip',
            type: "link",
            url: `/ui_kits/tooltip`,
          },
          {
            title: 'Dropdown',
            type: "link",
            url: `/ui_kits/dropdown`,
          },
          {
            title: 'Accordion',
            type: "link",
            url: `/ui_kits/accordion`,
          },
          {
            title: 'Tabs',
            type: "link",
            url: `/ui_kits/tabs`,
          },
          {
            title: 'Lists',
            type: "link",
            url: `/ui_kits/lists`,
          },
        ],
      },
      {
        id: 19,
        title: 'Bonus Ui',
        icon: 'bonus-kit',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Scrollable',
            type: "link",
            url: `/bonus_ui/scrollable`,
          },
          {
            title: 'Tree View',
            type: "link",
            url: `/bonus_ui/tree_view`,
          },
          {
            title: 'Toasts',
            type: "link",
            url: `/bonus_ui/toasts`,
          },
          {
            title: 'Rating',
            type: "link",
            url: `/bonus_ui/rating`,
          },
          {
            title: 'Dropzone',
            type: "link",
            url: `/bonus_ui/dropzone`,
          },
          {
            title: 'Tour',
            type: "link",
            url: `/bonus_ui/tour`,
          },
          {
            title: 'SweetAlert2',
            type: "link",
            url: `/bonus_ui/sweetalert_2`,
          },
          {
            title: 'Carousel',
            type: "link",
            url: `/bonus_ui/carousel`,
          },
          {
            title: 'Ribbons',
            type: "link",
            url: `/bonus_ui/ribbons`,
          },
          {
            title: 'Pagination',
            type: "link",
            url: `/bonus_ui/pagination`,
          },
          {
            title: 'Breadcrumb',
            type: "link",
            url: `/bonus_ui/breadcrumb`,
          },
          {
            title: 'Range Slider',
            type: "link",
            url: `/bonus_ui/range_slider`,
          },
          {
            title: 'Image Cropper',
            type: "link",
            url: `/bonus_ui/image_cropper`,
          },
          {
            title: 'Basic Card',
            type: "link",
            url: `/bonus_ui/basic_cards`,
          },
          {
            title: 'Creative Card',
            type: "link",
            url: `/bonus_ui/creative_cards`,
          },
          {
            title: 'Timeline',
            type: "link",
            url: `/bonus_ui/timeline`,
          },
        ],
      },
      {
        title: 'Icons',
        icon: 'icons',
        id: 20,
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Flag icon',
            type: "link",
            url: `/icons/flag_icons`,
          },
          {
            title: 'Fontawesome Icon',
            type: "link",
            url: `/icons/font_awesome_icon`,
          },
          {
            title: 'Ico Icon',
            type: "link",
            url: `/icons/ico_icon`,
          },
          {
            title: 'Themify Icon',
            type: "link",
            url: `/icons/themify_icon`,
          },
          {
            title: 'Feather Icon',
            type: "link",
            url: `/icons/feather_icon`,
          },
          {
            title: 'Weather Icon',
            type: "link",
            url: `/icons/weather_icon`,
          },
        ],
      },
      {
        title: 'Buttons',
        icon: 'button',
        id: 21,
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Default Style',
            type: "link",
            url: `/buttons/default_style`,
          },
          {
            title: 'Button Group',
            type: "link",
            url: `/buttons/button_group`,
          },
        ],
      },
      {
        title: 'Charts',
        icon: 'charts',
        type: 'sub',
        id: 22,
        active: false,
        menu: [
          {
            title: 'Apex Chart',
            type: "link",
            url: `/charts/apex_chart`,
          },
          {
            title: 'Google Chart',
            type: "link",
            url: `/charts/google_chart`,
          },
          {
            title: 'Chartjs Chart',
            type: "link",
            url: `/charts/chart_JS_chart`,
          },
        ],
      },
    ],
  },
  {
    title: 'Pages',
    menucontent: 'All neccesory pages added',
    menu: [
      {
        id: 23,
        title: 'Sample Page',
        url: `/pages/sample_page`,
        icon: 'sample-page',
        active: false,
        type: "link",
      },
      {
        id: 24,
        title: 'Others',
        icon: 'others',
        type: 'sub',
        menu: [
          {
            title: 'Error Page',
            type: 'sub',
            menu: [
              {
                title: 'Error 400',
                type: 'link',
                url: `/others/errors/error400`,
              },
              {
                title: 'Error 401',
                type: 'link',
                url: `/others/errors/error401`,
              },
              {
                title: 'Error 403',
                type: 'link',
                url: `/others/errors/error403`,
              },
              {
                title: 'Error 404',
                type: 'link',
                url: `/others/errors/error404`,
              },
              {
                title: 'Error 500',
                type: 'link',
                url: `/others/errors/error500`,
              },
              {
                title: 'Error 503',
                type: 'link',
                url: `/others/errors/error503`,
              },
            ],
          },
          {
            title: 'Authentication',
            type: 'sub',
            menu: [
              {
                title: 'Login Simple',
                type: 'link',
                url: `/others/authentication/loginsimple`,
              },
              {
                title: 'Login With Bg Image',
                type: 'link',
                url: `/others/authentication/loginbgimage`,
              },
              {
                title: 'Login With Image Two ',
                type: 'link',
                url: `/others/authentication/loginbgimagetwo`,
              },
              {
                title: 'Login With Validation',
                type: 'link',
                url: `/others/authentication/loginvalidation`,
              },
              {
                title: 'Login With Tooltip',
                type: 'link',
                url: `/others/authentication/logintooltip`,
              },
              {
                title: 'Login With Sweetalert',
                type: 'link',
                url: `/others/authentication/loginsweetalert`,
              },
              {
                title: 'Register Simple',
                type: 'link',
                url: `/others/authentication/registersimple`,
              },
              {
                title: 'Register With Bg Image',
                type: 'link',
                url: `/others/authentication/registerbgimage`,
              },
              {
                title: 'Register with Image Two',
                type: 'link',
                url: `/others/authentication/registerbgimagetwo`,
              },
              {
                title: 'Register Wizard',
                type: 'link',
                url: `/others/authentication/registerwizard`,
              },
              {
                title: 'Unlock User',
                type: 'link',
                url: `/others/authentication/unlockuser`,
              },
              {
                title: 'Forget Password',
                type: 'link',
                url: `/others/authentication/forgetpassword`,
              },
              {
                title: 'Reset Password',
                type: 'link',
                url: `/others/authentication/createpassword`,
              },
              {
                title: 'Maintenance',
                type: 'link',
                url: `/others/authentication/maintenance`,
              },
            ],
          },
          {
            title: 'Coming Soon',
            type: 'sub',
            menu: [
              {
                title: 'Coming Simple',
                type: 'link',
                url: `/others/coming_soon/comingsoonsimple`,
              },
              {
                title: 'Coming With Bg Video',
                type: 'link',
                url: `/others/coming_soon/comingbgvideo`,
              },
              {
                title: 'Coming With Bg Image',
                type: 'link',
                url: `/others/coming_soon/comingbgimg`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Miscellaneous',
    menucontent: 'Bouns Pages & Apps',
    menu: [
      {
        id: 25,
        title: 'Gallery',
        icon: 'gallery',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Gallery Grid',
            type: 'link',
            url: `/gallery/gallery_grids`,
          },
          {
            title: 'Gallery Grid Desc',
            type: 'link',
            url: `/gallery/gallery_grid_with_description`,
          },
          {
            title: 'Masonry Gallery',
            type: 'link',
            url: `/gallery/masonry_gallery`,
          },
          {
            title: 'Masonry With Desc',
            type: 'link',
            url: `/gallery/masonry_gallery_with_description`,
          },
          {
            title: 'Hover Effects',
            type: 'link',
            url: `/gallery/hover_effect`,
          },
        ],
      },
      {
        id: 26,
        title: 'Blog',
        icon: 'blog',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Blog Single',
            type: 'link',
            url: `/blog/blog_grids`,
          },
          {
            title: 'Blog Details',
            type: 'link',
            url: `/blog/blog_details`,
          },
          {
            title: 'Add Post',
            type: 'link',
            url: `/blog/add_post`,
          },
        ],
      },
      {
        id: 27,
        title: 'FAQ',
        type: 'link',
        icon: 'faq',
        active: false,
        url: `/miscellaneous/faq`,
      },
      {
        id: 28,
        title: 'Job Search',
        icon: 'job-search',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Cards view',
            type: 'link',
            url: `/job_search/card_view`,
          },
          {
            title: 'List View',
            type: 'link',
            url: `/job_search/list_view`,
          },
          {
            title: 'Job Details',
            type: 'link',
            url: `/job_search/job_detail`,
          },
          {
            title: 'Apply',
            type: 'link',
            url: `/job_search/apply`,
          },
        ],
      },
      {
        id: 29,
        title: 'Learning',
        icon: 'learning',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Learning List',
            type: 'link',
            url: `/learning/learning_list`,
          },
          {
            title: 'Detailed Course',
            type: 'link',
            url: `/learning/detailed_course`,
          },
        ],
      },
      {
        id: 30,
        title: 'Maps',
        icon: 'maps',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'Google Maps',
            type: 'link',
            url: `/map/google_map`,
          },
          {
            title: 'Leaflet Maps',
            type: 'link',
            url: `/map/leaflet_map`,
          },
        ],
      },
      {
        id: 31,
        title: 'Editors',
        icon: 'editors',
        type: 'sub',
        active: false,
        menu: [
          {
            title: 'CK Editor',
            type: 'link',
            url: `/editor/ck_editor`,
          },
          {
            title: 'MDE Editor',
            type: 'link',
            url: `/editor/mde_editor`,
          },
          {
            title: 'ACE Code Editor',
            type: 'link',
            url: `/editor/ace_editor`,
          },
        ],
      },
      {
        id: 32,
        title: 'Knowledgebase',
        icon: 'knowledgebase',
        type: 'link',
        active: false,
        url: `/miscellaneous/knowledgebase`,
      },
      {
        id: 33,
        title: 'Support Ticket',
        icon: 'support-tickets',
        type: 'link',
        active: false,
        url: `/miscellaneous/support_ticket`,
      },
    ],
  },
];