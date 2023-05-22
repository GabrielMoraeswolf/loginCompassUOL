import { NavParamsList } from "../Types/navigation"

declare global {
  namespace ReactNavigation {
		interface RootParamList extends NavParamsList {}
	}
}
