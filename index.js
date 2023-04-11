/**
 * @format
 */

import { AppRegistry } from "react-native"
import { name as appName } from "./app.json"
import App from "./src/App"
import "./src/providers/setCalendar"
import "./src/providers/axios"

AppRegistry.registerComponent(appName, () => App)
