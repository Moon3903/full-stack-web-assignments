# 32-docker

1. Jelaskan apa yang dimaksud dengan **container** pada docker !
   A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.
   [source](https://www.docker.com/resources/what-container)
2. Jelaskan apa perbedaan antara konsep **container** dengan **virtual machine** !
   Containers and virtual machines have similar resource isolation and allocation benefits, but function differently because containers virtualize the operating system instead of hardware. Containers are more portable and efficient.
   | CONTAINERS | VIRTUAL MACHINES |
   | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Containers are an abstraction at the app layer that packages code and dependencies together. Multiple containers can run on the same machine and share the OS kernel with other containers, each running as isolated processes in user space. Containers take up less space than VMs (container images are typically tens of MBs in size), can handle more applications and require fewer VMs and Operating systems. | Virtual machines (VMs) are an abstraction of physical hardware turning one server into many servers. The hypervisor allows multiple VMs to run on a single machine. Each VM includes a full copy of an operating system, the application, necessary binaries and libraries - taking up tens of GBs. VMs can also be slow to boot. |
   [source](https://www.docker.com/resources/what-container)
3. Apa yang dimaksud dengan **docker file** ?
   A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.
   [source](https://docs.docker.com/engine/reference/builder/)
4. Apa yang dimaksud dengan **docker registery** ?
   A registry is a storage and content delivery system, holding named Docker images, available in different tagged versions.
   [source](https://docs.docker.com/registry/introduction/)
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
   by using docker compose. Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.<br>
   Using Compose is basically a three-step process:<br>
   - Define your app’s environment with a Dockerfile so it can be reproduced anywhere.<br>
   - Define the services that make up your app in `docker-compose.yml` so they can be run together in an isolated environment.<br>
   - Run `docker compose up` and the Docker compose command starts and runs your entire app. You can alternatively run `docker-compose up` using the docker-compose binary.<br>
     A `docker-compose.yml` looks like this:
   ```
   version: "3.9"  # optional since v1.27.0
   services:
    web:
     build: .
     ports:
      - "5000:5000"
     volumes:
      - .:/code
      - logvolume01:/var/log
     links:
      - redis
    redis:
     image: redis
   volumes:
    logvolume01: {}
   ```
   [source](https://docs.docker.com/compose/)
