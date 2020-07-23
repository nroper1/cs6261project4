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
 		docker run -d -p 4200:4200 --name testcontainer -v $WORKSPACE:/home/nroper1/Documents/cs6261project4/log/calculator testimage
		RUN ./node_modules/protractor/bin/webdriver-manager update
		ng e2e using the --devServerTarget=
            }
        }
        stage('Deploy') {
            steps {
		docker stop testcontainer
		docker rm testcontainer
                docker build -ttestimage2 /home/nroper1/Documents/cs6261project4
 		docker run -d -p 5000:5000 --name tdeploycontainer -v $WORKSPACE:/home/nroper1/Documents/cs6261project4/log/calculator testimage2
            }
        }
    }
      post {
	     fixed {
		
		docker rm deploycontainer || true
    }
     }
}



