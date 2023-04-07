
//side panel
require(['gitbook', 'jquery'], function(gitbook, $) {
    var SITES = {
        'camc': {
            'label': 'CAMC',
            'icon': 'fa-solid fa-flask',
            'onClick': function(e) {
                e.preventDefault();
                window.open('ttps://www.camcmedicine.edu/academic-departments/department-internal-medicine/internal-medicine-residency-program/our-current');
            }
        },
        'facebook': {
            'label': 'Facebook',
            'icon': 'fa fa-facebook',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://www.facebook.com/Straley/');
            }
        },
        'github': {
            'label': 'Github',
            'icon': 'fa fa-gitlab',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://github.com/jzstraley');
            }
        },
        'instagram': {
            'label': 'Instagram',
            'icon': 'fa fa-instagram',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://www.instagram.com/austinthefamilyguy/');
            }
        },
        'linkedin': {
            'label': 'LinkedIn',
            'icon': 'fa fa-linkedin',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/jamesstraley');
            }
        },
        'orcid': {
            'label': 'ORCID',
            'icon': 'fa-brand fa-orcid',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://orcid.org/0000-0002-5441-9515');
            }
        },
        'youtube': {
            'label': 'Youtube',
            'icon': 'fa fa-youtube',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://www.youtube.com/channel/UCAAanG5A04oCXc2JnTjjLRQ');
            }
        }
    };



    gitbook.events.bind('start', function(e, config) {
        var opts = config.sharing;

        // Create dropdown menu
        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        // Create main button with dropdown
        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-share-alt',
                label: 'Share',
                position: 'right',
                dropdown: [menu]
            });
        }

        // Direct actions to share
        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            var onClick = site.onClick;

            if (sideId === "camc" && opts["camc_link"] !== undefined && opts["camc_link"] !== "") {
                onClick = function(e) {
                    e.preventDefault();
                    window.open(opts["camc_link"]);
                }
            }
            if (sideId === "facebook" && opts["facebook_link"] !== undefined && opts["facebook_link"] !== "") {
                onClick = function(e) {
                    e.preventDefault();
                    window.open(opts["facebook_link"]);
                }
            }
            if (sideId === "github" && opts["github_link"] !== undefined && opts["github_link"] !== "") {
                onClick = function(e) {
                    e.preventDefault();
                    window.open(opts["github_link"]);
                }
            }
            if (sideId === "linkedin" && opts["linkedin_link"] !== undefined && opts["linkedin_link"] !== "") {
                onClick = function(e) {
                    e.preventDefault();
                    window.open(opts["linkedin_link"]);
                }
            }

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: onClick
            });
        });
    });
});