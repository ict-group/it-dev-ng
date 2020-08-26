pipeline {
    agent any
    tools {
        jdk 'jdk-11'
        nodejs 'nodejs'
    }
    stages {
        stage('npm build') {
            steps {
                git url: 'git@bitbucket.org:vedra/place4me-ng.git'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage("Docker build") {
            steps {
                sh 'docker build -t place4me/place4me-ng . -f Dockerfile'
            }
        }
        stage("Docker tag and push") {
            steps {
                sh 'docker tag place4me/place4me-ng docker.bridge129.com/place4me/place4me-ng:1.0-SNAPSHOT'
                sh 'docker login docker.bridge129.com -u bridge129 -p vedraxx'
                sh 'docker push docker.bridge129.com/place4me/place4me-ng:1.0-SNAPSHOT'
            }
        }
        stage('npm clean') {
            steps {
                sh 'rm -fr node_modules'
            }
        }
    }
}
