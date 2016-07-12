INSERT INTO ADDRESS VALUES (1, 'Winterfell', 'White Alley', 1, 1);
INSERT INTO ADDRESS VALUES (2, 'Kings Landing', 'Red Keep', 1, 2);
INSERT INTO ADDRESS VALUES (3, 'Asshai', 'Street 1', 2, 777);

INSERT INTO ACCOUNT (ID,NAME,EMAIL,ADDRESS_ID) VALUES (1, 'Jon Snow', 'jsnow@gmail.com', 1);
INSERT INTO ACCOUNT (ID,NAME,EMAIL,ADDRESS_ID) VALUES (2, 'Jaime Lannister', 'jannister@gmail.com', 2);
INSERT INTO ACCOUNT (ID,NAME,EMAIL,ADDRESS_ID)VALUES (3, 'Daenerys Targaryen', 'dtargaryen@gmail.com', 3);
INSERT INTO ACCOUNT (ID,NAME,EMAIL,ADDRESS_ID) VALUES (4, 'Melisandre', 'melisandre@gmail.com', null);


INSERT INTO POST (ID,ACCOUNT_FK, TITLE, BODY) VALUES (1,1,'sunt aut facere repellat provident occaecati excepturi optio reprehenderit','quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
INSERT INTO POST (ID,ACCOUNT_FK, TITLE, BODY) VALUES (2,1,'qui est esse','est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla');
INSERT INTO POST (ID,ACCOUNT_FK, TITLE, BODY) VALUES (3,3,'ea molestias quasi exercitationem repellat qui ipsa sit aut','et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut');
INSERT INTO POST (ID,ACCOUNT_FK, TITLE, BODY) VALUES (4,3, 'eum et est occaecati','ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit');
INSERT INTO POST (ID,ACCOUNT_FK, TITLE, BODY) VALUES (5,3,'5 sunt aut facere repellat provident occaecati excepturi optio reprehenderit','5 quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
INSERT INTO POST (ID,ACCOUNT_FK, TITLE, BODY) VALUES (6,3,'6 qui est esse','6 est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla');
INSERT INTO POST (ID,ACCOUNT_FK, TITLE, BODY) VALUES (7,4,'7 ea molestias quasi exercitationem repellat qui ipsa sit aut','7 et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut');
INSERT INTO POST (ID,ACCOUNT_FK, TITLE, BODY) VALUES (8,4,'8 eum et est occaecati','9 ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit');


INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (1,2,'id labore ex et quam laborum','laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (2,2,'quo vero reiciendis velit similique earum','est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (3,2,'odio adipisci rerum aut animi','quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (4,2,'alias odio sit','non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (5,3,'vero eaque aliquid doloribus et culpa','harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (6,4,'et fugit eligendi deleniti quidem qui sint nihil autem','doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (7,4,'repellat consequatur praesentium vel minus molestias voluptatum','maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (8,4,'et omnis dolorem','ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (9,4,'provident id voluptas','sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (10,4,'eaque et deleniti atque tenetur ut quo ut','voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (11,2,'fugit labore quia mollitia quas deserunt nostrum sunt','ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (12,5,'modi ut eos dolores illum nam dolor','expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (13,5,'aut inventore non pariatur sit vitae voluptatem sapiente','fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (14,7,'et officiis id praesentium hic aut ipsa dolorem repudiandae','vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (15,7,'debitis magnam hic odit aut ullam nostrum tenetur','nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (16,7,'perferendis temporibus delectus optio ea eum ratione dolorum','iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (17,7,'eos est animi quis','consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (18,7,'aut et tenetur ducimus illum aut nulla ab','veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (19,7,'sed impedit rerum quia et et inventore unde officiis','doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut');
INSERT INTO COMMENT (ID, POST_FK, NAME, BODY) VALUES (20,7,'molestias expedita iste aliquid voluptates','qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore');










