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
                echo 'image built'
		docker run -d -p 4200:4200 -n testcontainer -v $WORKSPACE:/home/nroper1/Documents/cs6261project4/log/calculator testimage
		echo 'image has been run'
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

     stage('Deploy') {
            steps {
                docker build -ttestimage /home/nroper1/Documents/cs6261project4
                echo 'image built'
		docker run -d -p 4200:5000 -n testcontainer -v $WORKSPACE:/home/nroper1/Documents/cs6261project4/log/calculator testimage
		echo 'image has been run'
            }
        }
      post {
	     fixed {
		docker rm testcontainer || true
    }
    }
}
