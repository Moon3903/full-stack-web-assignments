# Tugas 1

Jawablah pertanyaan di bawah ini:

1.  Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript? <br>
    Node JS merupakan runtime environment dari javascript yang bersifat open source dan cross platform. Runtime ini menjalankan code javascript di luar dari browser dan menggunakan v8 engine dan biasanya digunakan untuk server side script atau back end.
2.  Mohon jelaskan arsitektur dari Node.js?<br>

    - Single Thread: javascript memiliki konsep single thread yang berarti satu task dalam suatu tumpukan.

    - Event Loop: semua request yang masuk akan diproses oleh event loop untuk dieksekusi.

    - Event Queue: menyimpan request sesuai urutan masuk untuk kemudian diproses oleh Event Loop satu per satu.

    - Server Side Scripting: menjalankan javascript pada server (back end)

3.  Ape perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?<br>

    - Built in Module: merupakan module yang sudah tersedia atau default dan siap pakai dari node js.

    - External module: merupakan module yang didapat dari suatu komunitas atau organisasi dan siap pakai.

    - Custom module: module yang kita buat sendiri.

4.  Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js? <br>

# Built in Modules

| Module         | Description                                                |
| -------------- | ---------------------------------------------------------- |
| assert         | Provides a set of assertion tests                          |
| buffer         | To handle binary data                                      |
| child_process  | To run a child process                                     |
| cluster        | To split a single Node process into multiple processes     |
| crypto         | To handle OpenSSL cryptographic functions                  |
| dgram          | Provides implementation of UDP datagram sockets            |
| dns            | To do DNS lookups and name resolution functions            |
| domain         | Deprecated. To handle unhandled errors                     |
| events         | To handle events                                           |
| fs             | To handle the file system                                  |
| http           | To make Node.js act as an HTTP server                      |
| https          | To make Node.js act as an HTTPS server                     |
| net            | To create servers and clients                              |
| os             | Provides information about the operation system            |
| path           | To handle file paths                                       |
| punycode       | Deprecated. A character encoding scheme                    |
| querystring    | To handle URL query strings                                |
| readline       | To handle readable streams one line at the time            |
| stream         | To handle streaming data                                   |
| string_decoder | To decode buffer objects into strings                      |
| timers         | To execute a function after a given number of milliseconds |
| tls            | To implement TLS and SSL protocols                         |
| tty            | Provides classes used by a text terminal                   |
| url            | To parse URL strings                                       |
| util           | To access utility functions                                |
| v8             | To access information about V8 (the JavaScript engine)     |
| vm             | To compile JavaScript code in a virtual machine            |
| zlib           | To compress or decompress files                            |

# External Modules

| Module    | Description                                                                                                                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequelize | Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more |

# Custom Modules

exports.add = (a, b) => <br>
{<br>
return a + b; <br>
};
