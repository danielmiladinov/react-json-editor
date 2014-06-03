/** @jsx React.DOM */
define([
    'lodash', 'react', 'ReactCursor',
    'react-json-editor'
], function (_, React, Cursor, JsonEditor) {
    'use strict';


    var App = React.createClass({

        getInitialState: function () {
            // Dummy data courtesy of json-generator.com
            return {
                data: [
                    {
                        "id": 0,
                        "guid": "3a91cce8-0d77-4ec7-b2cb-f46eccb949a7",
                        "isActive": true,
                        "balance": "$3,411.56",
                        "picture": "http://placehold.it/32x32",
                        "age": 38,
                        "eyeColor": "brown",
                        "name": "Morgan Jimenez",
                        "gender": "male",
                        "company": "BLEEKO",
                        "email": "morganjimenez@bleeko.com",
                        "phone": "+1 (819) 462-2072",
                        "address": "467 Anna Court, Alleghenyville, Maryland, 7810",
                        "about": "Nostrud consectetur do nisi deserunt esse aliqua minim adipisicing minim. Do do excepteur commodo amet pariatur labore. Veniam Lorem velit ad quis laborum nisi magna. Enim exercitation eiusmod consectetur velit laborum enim ut amet eu reprehenderit voluptate qui id enim. Est in velit aute deserunt quis ipsum commodo esse officia in do enim.\r\n",
                        "registered": "2014-04-13T09:29:37 +04:00",
                        "latitude": -6.678726,
                        "longitude": 31.378824,
                        "tags": [
                            "dolore",
                            "et",
                            "ut",
                            "pariatur",
                            "reprehenderit",
                            "voluptate",
                            "culpa"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Emerson Middleton"
                            },
                            {
                                "id": 1,
                                "name": "Jody Livingston"
                            },
                            {
                                "id": 2,
                                "name": "Lott Wyatt"
                            }
                        ],
                        "greeting": "Hello, Morgan Jimenez! You have 2 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "id": 1,
                        "guid": "955998ed-00b8-4f66-8cb5-d0045cc4f9ff",
                        "isActive": true,
                        "balance": "$3,595.76",
                        "picture": "http://placehold.it/32x32",
                        "age": 39,
                        "eyeColor": "brown",
                        "name": "Aileen Robbins",
                        "gender": "female",
                        "company": "KYAGURU",
                        "email": "aileenrobbins@kyaguru.com",
                        "phone": "+1 (821) 554-2522",
                        "address": "797 Brown Street, Mayfair, Washington, 8356",
                        "about": "Culpa in exercitation aliqua esse sit ipsum cupidatat. Dolor proident laboris commodo ad culpa magna nostrud aliqua elit. Dolor adipisicing ullamco voluptate et id. Proident non proident sit nulla sint quis pariatur exercitation aliqua commodo esse occaecat ipsum. Dolore nulla aliquip incididunt ullamco mollit elit. Magna amet adipisicing deserunt eiusmod officia proident. Ea ea exercitation anim labore qui Lorem laborum aute.\r\n",
                        "registered": "2014-05-30T13:53:27 +04:00",
                        "latitude": -48.005347,
                        "longitude": -104.123191,
                        "tags": [
                            "culpa",
                            "adipisicing",
                            "anim",
                            "ad",
                            "sit",
                            "nostrud",
                            "tempor"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Kristy Mcgowan"
                            },
                            {
                                "id": 1,
                                "name": "Delia Clark"
                            },
                            {
                                "id": 2,
                                "name": "Graciela Stone"
                            }
                        ],
                        "greeting": "Hello, Aileen Robbins! You have 9 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "id": 2,
                        "guid": "41a496ec-ab13-4339-8141-94602095d158",
                        "isActive": false,
                        "balance": "$3,115.29",
                        "picture": "http://placehold.it/32x32",
                        "age": 25,
                        "eyeColor": "brown",
                        "name": "Huber Dillon",
                        "gender": "male",
                        "company": "BEADZZA",
                        "email": "huberdillon@beadzza.com",
                        "phone": "+1 (879) 400-2404",
                        "address": "224 Sedgwick Place, Lavalette, Louisiana, 5800",
                        "about": "Dolore adipisicing occaecat eu adipisicing laboris nostrud ad ad adipisicing adipisicing velit consectetur qui Lorem. Mollit incididunt laborum velit irure. Ex ullamco voluptate proident culpa quis. Sint pariatur ut do qui aute nisi. Proident esse anim mollit deserunt Lorem ea ut et velit eu occaecat velit qui cillum. Non do nisi do mollit amet reprehenderit nisi non. Sit Lorem incididunt enim nostrud elit.\r\n",
                        "registered": "2014-02-07T02:54:22 +05:00",
                        "latitude": -45.878797,
                        "longitude": -146.122006,
                        "tags": [
                            "labore",
                            "pariatur",
                            "id",
                            "dolore",
                            "veniam",
                            "non",
                            "commodo"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Chris Levy"
                            },
                            {
                                "id": 1,
                                "name": "May Larsen"
                            },
                            {
                                "id": 2,
                                "name": "Duran Hood"
                            }
                        ],
                        "greeting": "Hello, Huber Dillon! You have 5 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "id": 3,
                        "guid": "3dea594a-25ab-4e18-b99d-f715b7010ced",
                        "isActive": true,
                        "balance": "$3,853.93",
                        "picture": "http://placehold.it/32x32",
                        "age": 25,
                        "eyeColor": "brown",
                        "name": "Madden Kim",
                        "gender": "male",
                        "company": "INTERLOO",
                        "email": "maddenkim@interloo.com",
                        "phone": "+1 (913) 424-2558",
                        "address": "940 Plymouth Street, Norvelt, Nebraska, 1543",
                        "about": "Sint amet velit anim elit. Occaecat commodo qui enim ullamco aliquip laboris et consectetur id aliqua. Exercitation duis amet sit consectetur ipsum enim incididunt nostrud qui commodo velit. Officia magna minim ad laboris. Laborum ex sit ad incididunt proident Lorem. Qui et ea magna labore aute Lorem reprehenderit sint non. Irure minim laborum laborum esse consectetur enim id.\r\n",
                        "registered": "2014-05-05T01:13:41 +04:00",
                        "latitude": -50.406024,
                        "longitude": -10.030832,
                        "tags": [
                            "consectetur",
                            "officia",
                            "eiusmod",
                            "fugiat",
                            "Lorem",
                            "voluptate",
                            "ex"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Fleming Stokes"
                            },
                            {
                                "id": 1,
                                "name": "Morton Newton"
                            },
                            {
                                "id": 2,
                                "name": "Charles Goff"
                            }
                        ],
                        "greeting": "Hello, Madden Kim! You have 4 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "id": 4,
                        "guid": "e8b86966-3d5c-4dc1-aade-098c76286c72",
                        "isActive": true,
                        "balance": "$2,194.13",
                        "picture": "http://placehold.it/32x32",
                        "age": 33,
                        "eyeColor": "green",
                        "name": "Millicent Pace",
                        "gender": "female",
                        "company": "SOLAREN",
                        "email": "millicentpace@solaren.com",
                        "phone": "+1 (855) 408-2704",
                        "address": "218 Johnson Avenue, Westboro, Delaware, 4395",
                        "about": "Ullamco cillum duis veniam aute. Mollit aute ullamco adipisicing reprehenderit anim Lorem. Est ex incididunt in elit reprehenderit pariatur qui velit Lorem anim ea et. Lorem dolor cillum exercitation ut ad non nostrud magna. Fugiat sint adipisicing nulla reprehenderit mollit nisi aute laboris enim aliqua est nisi velit et.\r\n",
                        "registered": "2014-05-04T00:59:43 +04:00",
                        "latitude": -6.458618,
                        "longitude": 155.068563,
                        "tags": [
                            "ipsum",
                            "ipsum",
                            "anim",
                            "sit",
                            "aliquip",
                            "enim",
                            "reprehenderit"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Wells Whitfield"
                            },
                            {
                                "id": 1,
                                "name": "Waters Oneil"
                            },
                            {
                                "id": 2,
                                "name": "Gould Kennedy"
                            }
                        ],
                        "greeting": "Hello, Millicent Pace! You have 5 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "id": 5,
                        "guid": "a9fd80f5-2a8f-4e47-80e4-e927945c9b46",
                        "isActive": false,
                        "balance": "$3,641.38",
                        "picture": "http://placehold.it/32x32",
                        "age": 30,
                        "eyeColor": "blue",
                        "name": "Darcy Kaufman",
                        "gender": "female",
                        "company": "MALATHION",
                        "email": "darcykaufman@malathion.com",
                        "phone": "+1 (877) 539-2974",
                        "address": "265 Newel Street, Austinburg, Nevada, 7062",
                        "about": "Sit laboris qui cupidatat laborum est sint duis reprehenderit magna et ullamco. Excepteur consequat ex exercitation mollit sint enim sunt fugiat irure dolor ut minim velit. Aliqua aute ea minim consequat proident magna veniam in qui non. Nisi Lorem anim consectetur proident irure id pariatur incididunt deserunt adipisicing excepteur ut esse.\r\n",
                        "registered": "2014-05-05T20:43:17 +04:00",
                        "latitude": -0.7881,
                        "longitude": 73.916238,
                        "tags": [
                            "id",
                            "fugiat",
                            "excepteur",
                            "nulla",
                            "tempor",
                            "aute",
                            "dolore"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Robbie Mccray"
                            },
                            {
                                "id": 1,
                                "name": "Caitlin Johnston"
                            },
                            {
                                "id": 2,
                                "name": "Bentley Nicholson"
                            }
                        ],
                        "greeting": "Hello, Darcy Kaufman! You have 4 unread messages.",
                        "favoriteFruit": "banana"
                    },
                    {
                        "id": 6,
                        "guid": "f350c790-b501-4bc4-a9f5-15e576437f23",
                        "isActive": true,
                        "balance": "$2,817.07",
                        "picture": "http://placehold.it/32x32",
                        "age": 39,
                        "eyeColor": "brown",
                        "name": "Jeannine Sears",
                        "gender": "female",
                        "company": "CABLAM",
                        "email": "jeanninesears@cablam.com",
                        "phone": "+1 (848) 591-3605",
                        "address": "884 Goodwin Place, Connerton, Wyoming, 8740",
                        "about": "Velit nisi enim tempor aute nisi irure veniam pariatur nisi ut aliquip eiusmod irure incididunt. Adipisicing aliquip dolore ullamco veniam cillum voluptate ad cillum sunt ipsum consequat. Aliquip pariatur duis ipsum magna. Sit cupidatat mollit cupidatat id ex veniam exercitation Lorem velit aute nulla quis.\r\n",
                        "registered": "2014-04-13T21:38:31 +04:00",
                        "latitude": -71.065158,
                        "longitude": -136.609925,
                        "tags": [
                            "culpa",
                            "dolore",
                            "dolor",
                            "tempor",
                            "incididunt",
                            "sint",
                            "voluptate"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Peck Snyder"
                            },
                            {
                                "id": 1,
                                "name": "Faye West"
                            },
                            {
                                "id": 2,
                                "name": "Clare Cline"
                            }
                        ],
                        "greeting": "Hello, Jeannine Sears! You have 10 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "id": 7,
                        "guid": "c3ed2e86-f33d-4eec-a1b5-30d71a21b99e",
                        "isActive": false,
                        "balance": "$1,634.95",
                        "picture": "http://placehold.it/32x32",
                        "age": 27,
                        "eyeColor": "blue",
                        "name": "Cora Cardenas",
                        "gender": "female",
                        "company": "DIGITALUS",
                        "email": "coracardenas@digitalus.com",
                        "phone": "+1 (814) 543-3626",
                        "address": "689 Chester Street, Robinette, Connecticut, 8096",
                        "about": "Veniam elit sint sit ullamco laboris culpa esse ea. Elit tempor irure id velit eiusmod qui enim nisi. Officia esse reprehenderit tempor aute ut sint tempor excepteur qui est nostrud ullamco. Consequat sit quis commodo cupidatat tempor minim. Amet quis duis in tempor pariatur incididunt commodo voluptate.\r\n",
                        "registered": "2014-03-20T03:44:59 +04:00",
                        "latitude": 88.386366,
                        "longitude": -110.118775,
                        "tags": [
                            "cupidatat",
                            "aliquip",
                            "elit",
                            "nulla",
                            "aliquip",
                            "eiusmod",
                            "ullamco"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Eve Reeves"
                            },
                            {
                                "id": 1,
                                "name": "Dean Mccormick"
                            },
                            {
                                "id": 2,
                                "name": "Joann Santiago"
                            }
                        ],
                        "greeting": "Hello, Cora Cardenas! You have 2 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "id": 8,
                        "guid": "2d7bea7a-8ff4-432f-b67b-7c2b2ff9e620",
                        "isActive": true,
                        "balance": "$2,799.49",
                        "picture": "http://placehold.it/32x32",
                        "age": 37,
                        "eyeColor": "blue",
                        "name": "Becker Mccall",
                        "gender": "male",
                        "company": "BLEENDOT",
                        "email": "beckermccall@bleendot.com",
                        "phone": "+1 (830) 483-2080",
                        "address": "393 Montauk Avenue, Harleigh, Utah, 1584",
                        "about": "Mollit qui adipisicing laborum sint ipsum nulla duis id irure. Laboris ex commodo elit nostrud consectetur amet ullamco eiusmod proident reprehenderit irure. Ut culpa et officia qui. Nulla elit nostrud incididunt minim veniam occaecat cupidatat consectetur pariatur enim quis ad laboris laboris. Veniam dolore irure proident minim fugiat culpa velit proident occaecat sunt ea id ipsum aliqua.\r\n",
                        "registered": "2014-03-25T23:48:07 +04:00",
                        "latitude": 21.679792,
                        "longitude": -32.448661,
                        "tags": [
                            "est",
                            "elit",
                            "veniam",
                            "Lorem",
                            "do",
                            "amet",
                            "exercitation"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Rocha Russell"
                            },
                            {
                                "id": 1,
                                "name": "Powers Pugh"
                            },
                            {
                                "id": 2,
                                "name": "Marilyn Cobb"
                            }
                        ],
                        "greeting": "Hello, Becker Mccall! You have 8 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "id": 9,
                        "guid": "d0c8083b-83e5-4c94-825e-b229b80f64f3",
                        "isActive": false,
                        "balance": "$3,169.35",
                        "picture": "http://placehold.it/32x32",
                        "age": 30,
                        "eyeColor": "brown",
                        "name": "Twila Woodard",
                        "gender": "female",
                        "company": "SLOFAST",
                        "email": "twilawoodard@slofast.com",
                        "phone": "+1 (834) 572-3603",
                        "address": "352 Gerry Street, Torboy, Arkansas, 8730",
                        "about": "Veniam tempor labore velit occaecat sint est amet eiusmod. Nulla nulla deserunt aute ipsum proident incididunt cillum anim nulla consequat. Reprehenderit dolor est cupidatat sit cupidatat quis. Anim do labore in consequat cupidatat occaecat enim eu do. Quis do ex nostrud tempor fugiat aliquip reprehenderit fugiat mollit magna adipisicing et ullamco ut.\r\n",
                        "registered": "2014-04-21T19:45:13 +04:00",
                        "latitude": 14.407165,
                        "longitude": -132.026193,
                        "tags": [
                            "commodo",
                            "ex",
                            "mollit",
                            "minim",
                            "ex",
                            "fugiat",
                            "elit"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Shannon Bass"
                            },
                            {
                                "id": 1,
                                "name": "Larson Harper"
                            },
                            {
                                "id": 2,
                                "name": "Brandi Oneill"
                            }
                        ],
                        "greeting": "Hello, Twila Woodard! You have 2 unread messages.",
                        "favoriteFruit": "banana"
                    },
                    {
                        "id": 10,
                        "guid": "81f4d3cf-6dd9-4fb1-84c3-cadda536fe8c",
                        "isActive": true,
                        "balance": "$2,118.15",
                        "picture": "http://placehold.it/32x32",
                        "age": 34,
                        "eyeColor": "blue",
                        "name": "Robinson Gates",
                        "gender": "male",
                        "company": "SHEPARD",
                        "email": "robinsongates@shepard.com",
                        "phone": "+1 (902) 572-3702",
                        "address": "554 Quentin Street, Roosevelt, Hawaii, 5606",
                        "about": "Do qui aliquip consequat ad tempor nostrud aute laboris occaecat. Et ut tempor ad tempor. Consectetur sit commodo nostrud laboris aliquip eu aliqua deserunt qui. Ullamco tempor incididunt exercitation proident excepteur et mollit occaecat tempor velit. Et tempor nulla commodo adipisicing.\r\n",
                        "registered": "2014-04-13T05:25:40 +04:00",
                        "latitude": -36.402816,
                        "longitude": -124.152278,
                        "tags": [
                            "laborum",
                            "aute",
                            "esse",
                            "eu",
                            "culpa",
                            "deserunt",
                            "est"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Mollie Nieves"
                            },
                            {
                                "id": 1,
                                "name": "Kent Johnson"
                            },
                            {
                                "id": 2,
                                "name": "Calderon Holland"
                            }
                        ],
                        "greeting": "Hello, Robinson Gates! You have 3 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "id": 11,
                        "guid": "0c57b786-fc97-45cd-8536-412c58f5a495",
                        "isActive": true,
                        "balance": "$2,753.96",
                        "picture": "http://placehold.it/32x32",
                        "age": 27,
                        "eyeColor": "blue",
                        "name": "Dianna Morin",
                        "gender": "female",
                        "company": "EXOBLUE",
                        "email": "diannamorin@exoblue.com",
                        "phone": "+1 (905) 531-2839",
                        "address": "500 Empire Boulevard, Guilford, West Virginia, 2155",
                        "about": "Quis sunt quis proident ex esse commodo cupidatat culpa. Adipisicing consequat sit sit ut veniam laborum excepteur sint ipsum exercitation eiusmod officia proident. Fugiat exercitation eiusmod aliqua dolore veniam consequat quis proident ipsum tempor ad. Commodo aute dolor aute reprehenderit laboris exercitation adipisicing nisi. Nostrud ut laboris quis mollit. Et voluptate nostrud adipisicing deserunt laboris duis consectetur consequat quis aliqua ullamco in exercitation. Officia exercitation fugiat aliquip sunt veniam nostrud id dolor id cillum minim exercitation aliquip consectetur.\r\n",
                        "registered": "2014-05-05T10:35:20 +04:00",
                        "latitude": 84.449757,
                        "longitude": 80.637074,
                        "tags": [
                            "Lorem",
                            "sint",
                            "id",
                            "Lorem",
                            "velit",
                            "Lorem",
                            "exercitation"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Rena Medina"
                            },
                            {
                                "id": 1,
                                "name": "Amy Bennett"
                            },
                            {
                                "id": 2,
                                "name": "Gomez Todd"
                            }
                        ],
                        "greeting": "Hello, Dianna Morin! You have 2 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "id": 12,
                        "guid": "4210027e-aea7-41a9-b937-77c000e83f53",
                        "isActive": false,
                        "balance": "$1,368.06",
                        "picture": "http://placehold.it/32x32",
                        "age": 36,
                        "eyeColor": "brown",
                        "name": "Christa Fleming",
                        "gender": "female",
                        "company": "EBIDCO",
                        "email": "christafleming@ebidco.com",
                        "phone": "+1 (995) 464-2734",
                        "address": "425 Grimes Road, Bend, Idaho, 7688",
                        "about": "Aute reprehenderit mollit duis aliqua veniam cillum. Nostrud exercitation dolor anim sint nulla velit nisi ut fugiat. Officia ad dolore voluptate velit aute esse quis qui pariatur. Aliqua non ut pariatur anim aliqua elit mollit. Ipsum laboris et veniam laborum ad irure.\r\n",
                        "registered": "2014-04-20T14:47:39 +04:00",
                        "latitude": -83.083652,
                        "longitude": -79.767692,
                        "tags": [
                            "ex",
                            "nostrud",
                            "tempor",
                            "amet",
                            "adipisicing",
                            "mollit",
                            "mollit"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Rodriguez Schneider"
                            },
                            {
                                "id": 1,
                                "name": "Mccoy Mercado"
                            },
                            {
                                "id": 2,
                                "name": "Arnold Reilly"
                            }
                        ],
                        "greeting": "Hello, Christa Fleming! You have 7 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "id": 13,
                        "guid": "4ba12cc5-20b4-4fab-9c3c-668bedc0ffbb",
                        "isActive": false,
                        "balance": "$1,122.03",
                        "picture": "http://placehold.it/32x32",
                        "age": 23,
                        "eyeColor": "brown",
                        "name": "Cameron Mayo",
                        "gender": "male",
                        "company": "QUADEEBO",
                        "email": "cameronmayo@quadeebo.com",
                        "phone": "+1 (916) 538-3272",
                        "address": "422 Williams Avenue, Monument, Colorado, 5425",
                        "about": "Occaecat labore tempor tempor aliqua deserunt voluptate occaecat occaecat labore in nostrud magna consequat culpa. Laborum veniam enim ex nisi est duis velit incididunt aliqua. Reprehenderit amet non cillum ad consequat voluptate in ut minim.\r\n",
                        "registered": "2014-05-22T09:32:35 +04:00",
                        "latitude": 88.740105,
                        "longitude": -79.992452,
                        "tags": [
                            "dolore",
                            "esse",
                            "eu",
                            "irure",
                            "aliquip",
                            "laboris",
                            "eiusmod"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Burns Herring"
                            },
                            {
                                "id": 1,
                                "name": "Miranda Tate"
                            },
                            {
                                "id": 2,
                                "name": "Greer Huber"
                            }
                        ],
                        "greeting": "Hello, Cameron Mayo! You have 8 unread messages.",
                        "favoriteFruit": "banana"
                    },
                    {
                        "id": 14,
                        "guid": "295d9573-225e-4963-a7ca-cd782f2713c6",
                        "isActive": false,
                        "balance": "$3,982.32",
                        "picture": "http://placehold.it/32x32",
                        "age": 23,
                        "eyeColor": "green",
                        "name": "Della Joseph",
                        "gender": "female",
                        "company": "ZAGGLES",
                        "email": "dellajoseph@zaggles.com",
                        "phone": "+1 (858) 478-3575",
                        "address": "642 Wythe Place, Rivers, Alabama, 4695",
                        "about": "Adipisicing anim aliqua do nulla ut veniam aliqua enim consequat ea. Eu culpa deserunt ad adipisicing quis cupidatat pariatur quis duis culpa ipsum amet aliqua. Aliquip sit proident aliquip eiusmod occaecat mollit ipsum fugiat nulla veniam laborum. Fugiat proident officia ipsum ad ea occaecat id dolore duis. Voluptate consequat et laboris reprehenderit nisi amet laboris dolor deserunt in. Magna est incididunt ut esse dolore exercitation incididunt enim excepteur. Est elit consectetur laboris do aliquip et velit officia voluptate minim.\r\n",
                        "registered": "2014-04-16T18:17:57 +04:00",
                        "latitude": -59.345365,
                        "longitude": -127.46145,
                        "tags": [
                            "nostrud",
                            "sit",
                            "aliquip",
                            "cillum",
                            "sit",
                            "cillum",
                            "officia"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Marion Salas"
                            },
                            {
                                "id": 1,
                                "name": "Katheryn Hudson"
                            },
                            {
                                "id": 2,
                                "name": "Watts Nelson"
                            }
                        ],
                        "greeting": "Hello, Della Joseph! You have 4 unread messages.",
                        "favoriteFruit": "banana"
                    },
                    {
                        "id": 15,
                        "guid": "fa235d78-ec24-4d06-89d1-acf62512976a",
                        "isActive": true,
                        "balance": "$1,519.24",
                        "picture": "http://placehold.it/32x32",
                        "age": 38,
                        "eyeColor": "blue",
                        "name": "Bridges Chavez",
                        "gender": "male",
                        "company": "SNORUS",
                        "email": "bridgeschavez@snorus.com",
                        "phone": "+1 (909) 497-3449",
                        "address": "852 Harden Street, Dundee, New Mexico, 4755",
                        "about": "Sunt ullamco nostrud labore minim nostrud nulla ut aute fugiat tempor non deserunt sunt. Magna ea ex eiusmod dolor do nostrud laborum ea excepteur. Sunt occaecat ipsum ea ullamco qui pariatur eu.\r\n",
                        "registered": "2014-01-31T22:21:12 +05:00",
                        "latitude": 88.512993,
                        "longitude": 156.205862,
                        "tags": [
                            "eu",
                            "veniam",
                            "laboris",
                            "reprehenderit",
                            "exercitation",
                            "esse",
                            "laboris"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Mcbride Finley"
                            },
                            {
                                "id": 1,
                                "name": "Ginger Bauer"
                            },
                            {
                                "id": 2,
                                "name": "Brigitte Jacobson"
                            }
                        ],
                        "greeting": "Hello, Bridges Chavez! You have 1 unread messages.",
                        "favoriteFruit": "banana"
                    },
                    {
                        "id": 16,
                        "guid": "7bf1b60a-e60e-4ba7-845b-4f8ee5693468",
                        "isActive": true,
                        "balance": "$3,907.97",
                        "picture": "http://placehold.it/32x32",
                        "age": 31,
                        "eyeColor": "blue",
                        "name": "Jaime Poole",
                        "gender": "female",
                        "company": "VIXO",
                        "email": "jaimepoole@vixo.com",
                        "phone": "+1 (892) 552-2217",
                        "address": "995 Neptune Avenue, Gorham, Missouri, 4475",
                        "about": "Mollit mollit laborum est nisi duis. Culpa consequat laborum consectetur magna do proident. Irure veniam sunt officia est. Et aliquip enim exercitation velit adipisicing qui Lorem nostrud mollit aliquip duis. Consequat adipisicing aute adipisicing qui commodo irure nulla occaecat aliqua laborum voluptate commodo ullamco. Veniam duis non deserunt pariatur aliqua. Esse eiusmod laborum tempor esse culpa.\r\n",
                        "registered": "2014-03-28T02:59:48 +04:00",
                        "latitude": 1.267352,
                        "longitude": -109.844794,
                        "tags": [
                            "ad",
                            "irure",
                            "cupidatat",
                            "do",
                            "mollit",
                            "amet",
                            "est"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Dominique Fuentes"
                            },
                            {
                                "id": 1,
                                "name": "Mattie Singleton"
                            },
                            {
                                "id": 2,
                                "name": "Lenora Farrell"
                            }
                        ],
                        "greeting": "Hello, Jaime Poole! You have 7 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "id": 17,
                        "guid": "8e962e11-6e10-495e-97a8-b8d63b9ff852",
                        "isActive": true,
                        "balance": "$1,097.81",
                        "picture": "http://placehold.it/32x32",
                        "age": 37,
                        "eyeColor": "blue",
                        "name": "Traci Coffey",
                        "gender": "female",
                        "company": "PAPRIKUT",
                        "email": "tracicoffey@paprikut.com",
                        "phone": "+1 (862) 579-3203",
                        "address": "519 Meeker Avenue, Elliott, California, 156",
                        "about": "Occaecat exercitation duis id eiusmod. Eiusmod consectetur cupidatat labore amet non in. Ad eu ut veniam cupidatat pariatur dolore minim non et exercitation elit commodo. Tempor labore occaecat velit reprehenderit aliquip laborum id pariatur irure fugiat ex nisi adipisicing. Adipisicing eu cupidatat laboris commodo quis cupidatat adipisicing mollit mollit ex dolor in. Eiusmod cillum officia cupidatat elit dolor excepteur. Ad occaecat nisi ad occaecat laboris enim ad labore duis aute deserunt laboris velit.\r\n",
                        "registered": "2014-04-05T05:19:44 +04:00",
                        "latitude": -75.587313,
                        "longitude": -122.173822,
                        "tags": [
                            "ullamco",
                            "eiusmod",
                            "consequat",
                            "quis",
                            "eu",
                            "voluptate",
                            "irure"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Lea Weber"
                            },
                            {
                                "id": 1,
                                "name": "Nellie Frye"
                            },
                            {
                                "id": 2,
                                "name": "Corina Colon"
                            }
                        ],
                        "greeting": "Hello, Traci Coffey! You have 3 unread messages.",
                        "favoriteFruit": "banana"
                    },
                    {
                        "id": 18,
                        "guid": "b4f286eb-7ae3-4fc1-84b7-986ef3c7c5f4",
                        "isActive": true,
                        "balance": "$1,830.89",
                        "picture": "http://placehold.it/32x32",
                        "age": 21,
                        "eyeColor": "green",
                        "name": "Rochelle Shepard",
                        "gender": "female",
                        "company": "YOGASM",
                        "email": "rochelleshepard@yogasm.com",
                        "phone": "+1 (894) 406-2224",
                        "address": "445 Cherry Street, Richmond, Illinois, 6477",
                        "about": "Nisi eiusmod ea qui consequat nulla reprehenderit eiusmod do sunt id proident. Exercitation fugiat eiusmod culpa commodo consequat ea culpa ullamco enim quis velit qui pariatur anim. Ex deserunt sint proident nulla et ullamco. Cupidatat dolor laboris non amet non incididunt. Sunt sit nulla labore commodo exercitation cillum nulla voluptate eiusmod ipsum duis ad. Velit officia anim ipsum aliquip consequat sit tempor nostrud. Commodo incididunt anim deserunt cupidatat incididunt excepteur sint.\r\n",
                        "registered": "2014-05-04T22:30:55 +04:00",
                        "latitude": 79.32658,
                        "longitude": -22.404083,
                        "tags": [
                            "excepteur",
                            "est",
                            "aute",
                            "incididunt",
                            "laboris",
                            "qui",
                            "aute"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Burgess Ray"
                            },
                            {
                                "id": 1,
                                "name": "Bonita Meyer"
                            },
                            {
                                "id": 2,
                                "name": "Nona Collier"
                            }
                        ],
                        "greeting": "Hello, Rochelle Shepard! You have 3 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "id": 19,
                        "guid": "4c5eaf9c-2c48-4ec5-9cad-ec3aaaead9f7",
                        "isActive": false,
                        "balance": "$3,226.58",
                        "picture": "http://placehold.it/32x32",
                        "age": 22,
                        "eyeColor": "green",
                        "name": "Thompson Campos",
                        "gender": "male",
                        "company": "GEEKMOSIS",
                        "email": "thompsoncampos@geekmosis.com",
                        "phone": "+1 (909) 540-3757",
                        "address": "617 Furman Avenue, Darbydale, North Dakota, 3530",
                        "about": "Qui consectetur Lorem consectetur quis consectetur minim adipisicing irure quis proident proident amet sunt. Velit esse cupidatat incididunt est culpa elit ullamco nulla officia qui ipsum officia sint veniam. Eu occaecat nisi id Lorem eiusmod excepteur laboris ipsum aliqua. Fugiat dolore est irure enim. Ipsum deserunt laborum proident ad non reprehenderit.\r\n",
                        "registered": "2014-03-06T14:19:13 +05:00",
                        "latitude": -30.758544,
                        "longitude": -154.958331,
                        "tags": [
                            "veniam",
                            "adipisicing",
                            "aute",
                            "aliqua",
                            "fugiat",
                            "et",
                            "voluptate"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Ellen Graham"
                            },
                            {
                                "id": 1,
                                "name": "Lynnette Gillespie"
                            },
                            {
                                "id": 2,
                                "name": "Gregory Stout"
                            }
                        ],
                        "greeting": "Hello, Thompson Campos! You have 1 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "id": 20,
                        "guid": "7825e17d-9f45-41ce-be23-2b088a8745c9",
                        "isActive": false,
                        "balance": "$3,396.15",
                        "picture": "http://placehold.it/32x32",
                        "age": 36,
                        "eyeColor": "green",
                        "name": "Alfreda Winters",
                        "gender": "female",
                        "company": "ELEMANTRA",
                        "email": "alfredawinters@elemantra.com",
                        "phone": "+1 (951) 446-3626",
                        "address": "525 Corbin Place, Leeper, Alaska, 2455",
                        "about": "Reprehenderit fugiat non adipisicing proident laboris proident consequat. Elit elit mollit quis laboris nulla et tempor exercitation velit. Voluptate ipsum anim do Lorem adipisicing mollit incididunt ipsum sit Lorem incididunt adipisicing laborum culpa. Commodo reprehenderit culpa pariatur sit sint eu. Aliqua incididunt velit Lorem nulla. Nostrud labore et consectetur do reprehenderit. Irure enim Lorem aute eu occaecat id proident laborum ut quis et.\r\n",
                        "registered": "2014-01-03T00:19:29 +05:00",
                        "latitude": 42.226976,
                        "longitude": -129.031412,
                        "tags": [
                            "commodo",
                            "Lorem",
                            "veniam",
                            "amet",
                            "magna",
                            "nostrud",
                            "eu"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Lamb Cortez"
                            },
                            {
                                "id": 1,
                                "name": "Betsy Greer"
                            },
                            {
                                "id": 2,
                                "name": "Blankenship Foster"
                            }
                        ],
                        "greeting": "Hello, Alfreda Winters! You have 3 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "id": 21,
                        "guid": "578f1469-33b9-4450-9ef9-6e1f4ff13a0c",
                        "isActive": false,
                        "balance": "$3,912.79",
                        "picture": "http://placehold.it/32x32",
                        "age": 34,
                        "eyeColor": "blue",
                        "name": "Mathews Barker",
                        "gender": "male",
                        "company": "ZILLIDIUM",
                        "email": "mathewsbarker@zillidium.com",
                        "phone": "+1 (942) 581-2198",
                        "address": "308 Ryder Street, Dunnavant, Michigan, 5303",
                        "about": "Irure ut anim in laboris sint veniam elit fugiat sint. Reprehenderit sit fugiat Lorem ea reprehenderit in ullamco consectetur velit sit tempor eiusmod. Pariatur aliqua do officia ad occaecat sunt cupidatat laboris excepteur velit nostrud. Exercitation ut duis nisi labore anim Lorem officia laboris ex mollit Lorem mollit id. Laborum ex aute duis quis aute laboris magna culpa adipisicing qui ullamco.\r\n",
                        "registered": "2014-02-13T04:52:22 +05:00",
                        "latitude": 65.322615,
                        "longitude": 124.745807,
                        "tags": [
                            "irure",
                            "ullamco",
                            "adipisicing",
                            "sit",
                            "commodo",
                            "sit",
                            "commodo"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Hodges Luna"
                            },
                            {
                                "id": 1,
                                "name": "Solomon Gilliam"
                            },
                            {
                                "id": 2,
                                "name": "Marian Chambers"
                            }
                        ],
                        "greeting": "Hello, Mathews Barker! You have 3 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "id": 22,
                        "guid": "9da6e516-470a-4389-99de-8f14a729240f",
                        "isActive": true,
                        "balance": "$1,656.02",
                        "picture": "http://placehold.it/32x32",
                        "age": 22,
                        "eyeColor": "blue",
                        "name": "Cecelia Pate",
                        "gender": "female",
                        "company": "NITRACYR",
                        "email": "ceceliapate@nitracyr.com",
                        "phone": "+1 (810) 599-2837",
                        "address": "768 Bushwick Court, Cedarville, Georgia, 222",
                        "about": "Voluptate pariatur amet labore irure culpa proident Lorem laboris elit. Cupidatat velit excepteur eu dolor Lorem incididunt. Excepteur sint commodo esse dolor ea minim pariatur est ut. Velit eiusmod consequat cillum tempor nisi eiusmod qui eiusmod dolore enim eu aute dolor nulla. Anim adipisicing sunt adipisicing ea. Reprehenderit aliquip incididunt laborum anim ut.\r\n",
                        "registered": "2014-01-13T17:21:20 +05:00",
                        "latitude": 54.77976,
                        "longitude": -40.990368,
                        "tags": [
                            "sint",
                            "magna",
                            "qui",
                            "officia",
                            "id",
                            "laborum",
                            "minim"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Sampson Manning"
                            },
                            {
                                "id": 1,
                                "name": "Carver Mosley"
                            },
                            {
                                "id": 2,
                                "name": "Arlene Hendrix"
                            }
                        ],
                        "greeting": "Hello, Cecelia Pate! You have 7 unread messages.",
                        "favoriteFruit": "apple"
                    },
                    {
                        "id": 23,
                        "guid": "d34f6735-c218-4327-8f9f-24d8c8357b73",
                        "isActive": true,
                        "balance": "$1,365.03",
                        "picture": "http://placehold.it/32x32",
                        "age": 32,
                        "eyeColor": "blue",
                        "name": "Moran Foley",
                        "gender": "male",
                        "company": "VINCH",
                        "email": "moranfoley@vinch.com",
                        "phone": "+1 (915) 533-2169",
                        "address": "691 Ferris Street, Ruffin, Montana, 9382",
                        "about": "Voluptate pariatur in velit dolor et. Et ea anim tempor ex Lorem cillum eiusmod officia sunt est esse ea. Sunt ut voluptate proident aliqua ullamco ullamco voluptate. Tempor eu eu dolore sint veniam reprehenderit fugiat officia nulla nulla ex aliquip. Velit nostrud ea aliquip voluptate consectetur dolore adipisicing nulla nisi sint ea amet. Dolor eu cillum cupidatat ipsum.\r\n",
                        "registered": "2014-05-22T15:13:27 +04:00",
                        "latitude": -68.029554,
                        "longitude": 25.339642,
                        "tags": [
                            "fugiat",
                            "proident",
                            "in",
                            "in",
                            "in",
                            "commodo",
                            "est"
                        ],
                        "friends": [
                            {
                                "id": 0,
                                "name": "Jessica Parks"
                            },
                            {
                                "id": 1,
                                "name": "Battle Contreras"
                            },
                            {
                                "id": 2,
                                "name": "Althea Soto"
                            }
                        ],
                        "greeting": "Hello, Moran Foley! You have 6 unread messages.",
                        "favoriteFruit": "banana"
                    }
                ]
            };
        },

        getPendingState: function () {
            return this._pendingState || this.state;
        },

        render: function () {
            var rootCursor = Cursor.build(this.state, this.getPendingState, this.setState.bind(this));
            return (
                <div className="App">
                    <div>
                        State
                        <pre>{JSON.stringify(this.state, undefined, 2)}</pre>
                    </div>
                    <div>
                        Editor
                        <JsonEditor targetCursor={rootCursor} />
                    </div>
                    <div>
                        Second editor, because we can
                        <JsonEditor targetCursor={rootCursor} />
                    </div>
                </div>
            );
        }
    });



    function entrypoint(rootEl) {
        React.renderComponent(<App />, rootEl);
    }

    return {
        entrypoint: entrypoint
    };
});