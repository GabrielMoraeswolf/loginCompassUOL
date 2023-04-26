import { NavParamsList } from "../types/navigation"

declare global {
  namespace ReactNavigation {
		interface RootParamList extends NavParamsList {}
	}
}
