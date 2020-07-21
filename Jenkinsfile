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
        stage('Deploy') {
            steps {
                echo 'Not yet implemented'
            }
        }
        stage('e2e') {
            steps {
 		docker build -ttestimage /home/nroper1/Documents/cs6261project4
                echo 'image built'
		docker run -d -p 4200:4200 -n testcontainer -v $WORKSPACE:/home/nroper1/Documents/cs6261project4/log/calculator testimage
		echo 'image run'
                webdriver-manager update
		echo 'update run'
		ng e2e --devServerTarget=
            }
        }
	post {
	     fixed {
		docker rm testcontainer || true
    }
}
