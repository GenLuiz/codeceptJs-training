pipeline {
    agent any
    tools {nodejs "NodeJs"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm install selenium-standalone'
                sh 'npm install @wdio/selenium-standalone-service --save'
            }
        }
        stage('run tests') {
            steps{
                sh 'codeceptjs run --steps'
            }
        }
    }
}