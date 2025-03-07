Node.js + MySQL - CRUD API Example
In this example we'll cover how to build a simple Node.js API that supports CRUD operations and stores data in a MySQL database. The example API includes routes to create, retrieve, update and delete records in a MySQL database, the records in the example are user records but the same CRUD pattern and code structure could be applied to any type of data e.g. products, services, articles etc.

MySQL Code First DB Generation with Sequelize
The Node.js API automatically creates the MySQL database on startup (if required) and synchronizes db tables and columns with javascript models defined using the Sequelize ORM library. Database creation and model synchronization is performed by the initialize() function in the MySQL database wrapper.
Tools required for this example
To follow the steps in this tutorial you'll need the following:
Node.js & npm - includes the Node.js runtime, command line tools and package manager, install it from https://nodejs.org/.
MySQL - you'll need access to a running MySQL server instance for the API to connect to, it can be remote (e.g. Azure, AWS etc) or on your local machine. The Community Server version is available for free from https://dev.mysql.com/downloads/mysql/, ensure it is started so the API can connect to it. Installation instructions are available at https://dev.mysql.com/doc/refman/8.0/en/installing.html.
A code editor to view and edit the API code, it doesn't matter which one, personally I use Visual Studio Code which is a free editor that runs on Windows, Mac and Linux, you can download it at https://code.visualstudio.com/.
Node.js + MySQL CRUD API Project Structure
The project is structured into feature folders (users) and non-feature / shared component folders (_helpers, _middleware). Shared component folders contain code that can be used across multiple features or other parts of the application, and are prefixed with an underscore _ to group them together and make it easy to differentiate between feature specific and shared code.
The CRUD example only contains a single feature (users) at the moment, but could be easily extended with other features by copying the users folder and following the same pattern.


https://docs.google.com/document/d/1iWbc4YYrCLHV4OeBWg80n3Cmj26-Nej-MODA-qJOd3o/edit?tab=t.0#heading=h.dl45tncroa6w
