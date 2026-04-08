import { InstallAppsContext } from "./InstallAppsContest";

const InstalledAppsProvider = ({children}) => {

    const data = {
        name: "aziz",
        age: 19,
    }
    return (
        <InstallAppsContext.Provider value={data}>{children}</InstallAppsContext.Provider>
    );
};

export default InstalledAppsProvider;