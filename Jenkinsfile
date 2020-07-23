pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'ng test'
            }
        }
        
        stage('e2e') {
            steps {
 		echo 'not yet implemented'
            }
        }
	post {
	     fixed {
		docker rm testcontainer || true
    }}

     stage('Deploy') {
            steps {
                echo 'not yet implemented'
            }
        }
      post {
	     fixed {
		docker rm testcontainer || true
    }
     }
}
