    "config": {
        "plugins": ["fontsettings", "highlight", "livereload", "lunr", "search", "sharing", "theme-default", "livereload","expandable-chapters"],
        "styles": {
            "ebook": "styles/ebook.css",
            "epub": "styles/epub.css",
            "mobi": "styles/mobi.css",
            "pdf": "styles/pdf.css",
            "print": "styles/print.css",
            "website": "styles/website.css"
        },
        "pluginsConfig": {
            "expandable-chapters":{},
            "fontsettings": {
                "family": "sans",
                "size": 2,
                "theme": "white"
            },
            "highlight": {},
            "livereload": {},
            "lunr": {
                "ignoreSpecialCharacters": false,
                "maxIndexSize": 1000000
            },
            "search": {},
            "sharing": {
                "all": ["camc", "youtube", "instagram","orcid","linkedin", "facebook","github"],
                "camc": true,
                "camc_link": "https://www.camcmedicine.edu/academic-departments/department-internal-medicine/internal-medicine-residency-program/our-current#%3Ch4%20class=%22team-member__name%22%3E%20Austin%20Straley,%20DO:~:text=Show%20bio,-Lydia%20Tambasis%2C%20DO",
                "youtube": false,
                "instagram": false,
                "orcid": false,
                "linkedin": true,
                "linkedin_link": "https://www.linkedin.com/in/jamesstraley",
                "facebook": true,
                "facebook_link": "https://www.facebook.com/Straley/",
                "github": true,
                "github_link": "https://github.com/jzstraley",
            },
            "theme-default": {
                "showLevel": false,
                "styles": {
                    "ebook": "styles/ebook.css",
                    "epub": "styles/epub.css",
                    "mobi": "styles/mobi.css",
                    "pdf": "styles/pdf.css",
                    "print": "styles/print.css",
                    "website": "styles/website.css"
                }
            }
        },
        "theme": "default",
        "author": "Austin Straley, DO",
        "pdf": {
            "pageNumbers": true,
            "fontSize": 12,
            "fontFamily": "Arial",
            "paperSize": "a4",
            "chapterMark": "pagebreak",
            "pageBreaksBefore": "/",
            "margin": {
                "right": 62,
                "left": 62,
                "top": 56,
                "bottom": 56
            }
        },
        "structure": {
            "langs": "LANGS.md",
            "readme": "README.md",
        },
        "variables": {},
        "title": "{{site.title}}",
        "language": "en",
        "gitbook": "*"
    },
    "file": {
        "path": "{{ page.path }}",
        "mtime": "{{ page.date }}",
        "type": "markdown"
    },
    "gitbook": {
        "version": "{{site.gitbook_version}}",
        "time": "{{site.time}}"
    },
    "basePath": "{{site.baseurl}}",
    "book": {
        "language": ""
    }
