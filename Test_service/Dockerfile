FROM openjdk:12-jdk-alpine
VOLUME /tmp
ADD target/demo-0.0.1-SNAPSHOT-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8084
ENTRYPOINT ["java","-jar","/app.jar"]