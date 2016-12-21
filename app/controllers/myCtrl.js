app.controller("myCtrl", function($scope) {
    $scope.checkIfEnterKeyWasPressed = function($event){
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            for(var i = 0; i<$scope.itemList.length; i++)
            {
                if ($scope.itemList[i].active === true) {
                    $scope.itemList[i].comments.push({commentText: $scope.addCommentText});
                    $scope.itemList[i].count = $scope.itemList[i].count + 1;
                    $scope.addCommentText = "";
                }
            }
        }

    };
    $scope.addItemKey = function($event){
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            $scope.itemList.push({ name: $scope.addText, count: 1, active: false,
                comments: [{
                    commentText: "First Comment"
                }]
            });
        }
    };
    $scope.addItem = function(){
        $scope.itemList.push({ name: $scope.addText, count: 1, active: false,
            comments: [{
                commentText: "First Comment"
            }]
        });
    };
    $scope.removeItem = function (x) {
        $scope.itemList.splice(x, 1);
    };
    $scope.toggleActive = function(s){
        for(var i = 0; i<$scope.itemList.length; i++)
        {
            $scope.itemList[i].active = false;
        }
        s.active = true;
    };
    $scope.itemList = [{
        name: "Programmers",
        count: 3,
        active: false,
        comments: [{
            commentText: "Pavel Valeryevich Durov (Russian: Па́вел Вале́рьевич Ду́ров; born 10 October 1984) is a Russian entrepreneur who is best known for being the founder of the social networking site VK, and later the Telegram Messenger.[6] He is the younger brother of Nikolai Durov. Since being dismissed as CEO of VK in 2014,[7] the Durov brothers have traveled the world in self-imposed exile[8] as citizens of Saint Kitts and Nevis."
        },{
            commentText: "Mark Elliot Zuckerberg (born May 14, 1984) is an American computer programmer, Internet entrepreneur, and philanthropist. He is the chairman, chief executive officer, and co-founder of the social networking website Facebook.[4][5] His net worth is estimated to be US $50 billion as of December 2016, making him the 5th richest person in the world."
        },{
            commentText: "William Henry Bill Gates III (born October 28, 1955) is a technology entrepreneur, American business magnate, investor, author and philanthropist.[2][3] In 1975, Gates and fellow visionary Paul Allen co-founded the Microsoft Corporation, which became the world's largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014.[4][a] Gates has authored and co-authored several books."
        }]
    },{
        name: "Writers",
        count: 3,
        active: true,
        comments: [{
            commentText: "Alexander Sergeyevich Pushkin (/ˈpʊʃkɪn/;[1] Russian: Алекса́ндр Серге́евич Пу́шкин, tr. Aleksandr Sergeyevich Pushkin; IPA: [ɐlʲɪˈksandr sʲɪˈrɡʲejɪvʲɪtɕ ˈpuʂkʲɪn] ( listen); 6 June [O.S. 26 May] 1799 – 10 February [O.S. 29 January] 1837) was a Russian poet, playwright, and novelist of the Romantic era[2] who is considered by many to be the greatest Russian poet and the founder of modern Russian literature."
        },{
            commentText: "Taras Hryhorovych Shevchenko[4] (March 9 [O.S. February 25] 1814 – March 10 [O.S. February 26] 1861) was a dissident activist in Imperial Russia, and a Ukrainian poet, writer, artist, public and political figure, as well as folklorist and ethnographer. His literary heritage is regarded to be the foundation of modern Ukrainian literature and, to a large extent, the modern Ukrainian language. Shevchenko is also known for many masterpieces as a painter and an illustrator."
        },{
            commentText: "Alexander Alexandrovich Blok (Russian: Алекса́ндр Алекса́ндрович Бло́к; IPA: [ɐlʲɪˈksandr ɐlʲɪˈksandrəvʲɪtɕ ˈblok] ( listen); 28 November [O.S. 16 November] 1880 – 7 August 1921) was a Russian lyrical poet."
        }]
    }];
});