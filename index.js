import sequelize from "./database.js";

import Sports from "./model/sports.js";
import Team from "./model/team.js";
import Participant from "./model/participant.js";

sequelize.sync().then(result => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});