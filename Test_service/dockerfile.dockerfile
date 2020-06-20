FROM openjdk:12-jdk-alpine
VOLUME /tmp
ADD target/Test_service.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]