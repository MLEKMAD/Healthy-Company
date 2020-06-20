FROM openjdk:12-jdk-alpine
VOLUME /tmp
ADD target/User_service.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]