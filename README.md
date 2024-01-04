# Ignite Fleet

This is the Ignite Fleet project, a fleet management application with features for authentication, online and offline data storage, as well as map and geolocation capabilities.

## Description

Ignite Fleet is an application designed to streamline fleet management tasks. It allows users to authenticate via social login and perform operations both online, syncing data with MongoDB Atlas, and offline, utilizing RealmDB as a local database. The app also offers advanced map and geolocation features, enabling users to visualize their position on a map and execute background tasks such as location updates even when the app is in the background.

## Features

- **Authentication with Social Login:** Using social authentication methods for user access.
- **Online and Offline Data Storage:** Leveraging MongoDB Atlas for online storage and RealmDB for local storage, with data synchronization.
- **Map and Geolocation Features:** Displaying the user's position on a map and utilizing geolocation for specific functionalities.
- **Background Tasks:** Capability to perform tasks, like location updates, even when the app is not in focus.

## Installation

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Follow instructions to configure MongoDB Atlas and RealmDB as per the documentation.
4. Run `npx expo prebuild` to pre-build the project.
5. Run the application using `npx expo run:android` to start the project on Android.

## Contribution

Contributions are welcome! Feel free to open issues or pull requests for improvements, bug fixes, or new features.

## Authors

This project was developed by endersonlg and is part of the Ignite course by Rocketseat.
