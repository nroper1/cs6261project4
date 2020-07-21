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
 		
		echo 'update run'
		ng e2e --devServerTarget=
            }
        }
	post {
	     fixed {
		docker rm testcontainer || true
    }
     }

     stage('Deploy') {
            steps {
                docker build -ttestimage /home/nroper1/Documents/cs6261project4
                echo 'image built'
    }
    }
}
