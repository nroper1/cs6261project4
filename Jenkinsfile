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
 		docker build -ttestimage /home/nroper1/Documents/cs6261project4
		docker run -d -p 4200:4200 -ttestcontainer -v $WORKSPACE:/home/nroper1/Documents/cs6261project4/log/calculator testimage
                webdriver-manager update
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
                echo 'not yet implemented'
            }
        }
    }
}
