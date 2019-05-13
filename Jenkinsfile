pipeline {
    agent any
    tools {nodejs "NodeJs"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install codeceptjs'
                sh 'npm install selenium-standalone'
                sh 'npm install @wdio/cli'
                sh 'npm install @wdio/selenium-standalone-service'
            }
        }
        stage('run tests') {
            steps{
                sh 'codeceptjs run --steps'
            }
        }
    }
}