pipeline {
    agent any
    tools {nodejs "NodeJs"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install -g node-gyp'
                sh 'npm install codeceptjs'
                sh 'npm install selenium-standalone'
                sh 'npm install @wdio/cli'
                sh 'selenium-standalone start'
            }
        }
        stage('run tests') {
            steps{
                sh 'codeceptjs run --steps'
            }
        }
    }
}