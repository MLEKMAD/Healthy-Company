FROM openjdk:12-jdk-alpine
VOLUME /tmp
ADD target/User_service-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8083
ENTRYPOINT ["java","-jar","/app.jar"]