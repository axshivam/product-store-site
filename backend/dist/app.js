"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, express_fileupload_1.default)());
// Setting up use files for views directory
app.use(express_1.default.static(__dirname + '/public'));
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`Server Running at Port ${port}`);
});
