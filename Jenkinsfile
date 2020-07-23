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
        stage('Deploy') {
            steps {
                echo 'not yet implemented'
            }
        }
}
