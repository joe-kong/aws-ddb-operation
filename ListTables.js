/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
var AWS = require("aws-sdk");


/**DynamoDBWebServiceを使う場合*/
//  var proxy = require('proxy-agent');
// AWS.config.update({
//     httpOptions: {
//         agent: proxy('http://www-proxy.sra.co.jp:80')
//     },
//     region: "ap-northeast-1",
//    endpoint:"https://dynamodb.ap-northeast-1.amazonaws.com",
// });

/**DynamoDBLocalを使う場合*/
AWS.config.update({
    accessKeyId:"wh9ywi",
    secretAccessKey:"h2xsfw",
    endpoint: "http://localhost:8000",
    region: "localhost",
 });

//var docClient = new AWS.DynamoDB.DocumentClient();
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
    Limit:10,
};

console.log("list tables.");
ddb.listTables(params, onList);

function onList(err, data) {
    if (err) {
        console.error("Unable to list tables. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("List succeeded.");
        console.log("Table names are",data.TableNames)
    }
}