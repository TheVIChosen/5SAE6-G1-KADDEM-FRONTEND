pipeline {
    agent any
    environment {
    DOCKERHUB_USERNAME = "saiditayssir" 
  }

    stages {
         stage('Get Started') {
      steps {
        echo "Start Building Pipeline"
      }
    }
   
    
        
    
    stage("Clone from Git") {
        steps {
            git url: 'git@github.com:TheVIChosen/5SAE6-G1-KADDEM-FRONTEND.git',
            credentialsId: 'git',
            branch: 'saiditayssir_5sae6_g1'
        }
    }
  
        stage('Build Frontend') {
            steps {
                sh 'npm install'
                sh 'ng build'
            }
        }

  stage('Static Analysis') {
        
          
           environment {
                scannerHome = tool 'sonnarqubeScanner';
            }
            steps {
                 withSonarQubeEnv(credentialsId: 'token_sonar', installationName: 'Sonarqube') {
                  //  sh 'mvn sonar:sonar -Dsonar.token=${SONAR_TOKEN} -Dsonar.host.url=${SONAR_URL} -Dsonar.java.binaries=target/classes'
               sh "${scannerHome}/bin/sonar-scanner \
        -Dsonar.projectKey=springdevops \
        -Dsonar.java.binaries=target/classes \
        -Dsonar.sources=src/main/java \
        -Dsonar.host.url=http://192.168.100.11:9000/"
        //-Dsonar.host.url=http://192.168.33.10:9000/"
        
                
                }
            }
        }
    


        stage('Docker Login') {
            steps {
                echo 'Logging into DockerHub...'
                withCredentials([usernamePassword(credentialsId: 'docker', 
                  usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    sh "docker login -u \$DOCKERHUB_USERNAME -p \$DOCKERHUB_PASSWORD"
                }
            }
        }

        stage('Docker Push') {
            steps {
                echo 'Pushing Docker image to DockerHub...'
                withCredentials([usernamePassword(credentialsId: 'docker', 
                  usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    sh "docker push saiditayssir/springboot-app:v1.0.0"
                }
            }
        }
        stage('slack notification') {
            ///
            steps{
                slackSend channel: '#thevchosen', message: "Successful completition of ${env.JOB_NAME}", teamDomain: 'devops-d4e9866', tokenCredentialId: 'slack1'
            }
        }
    }
     post {
        always {
            jacoco execPattern: 'target/jacoco.exec'
           // junit '**/target/surefire-reports/*.xml'
        }
    }
}