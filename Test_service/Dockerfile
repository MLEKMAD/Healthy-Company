FROM openjdk:12-jdk-alpine
VOLUME /tmp
ADD target/demo.jar app.jar
EXPOSE 8084
ENTRYPOINT ["java","-jar","/app.jar"]